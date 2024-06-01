const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../models/BlacklistedToken');
const User = require('../models/User');
const {validationResult} = require('express-validator');
const { isEmail, isStrongPassword  } = require('validator');

exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, name} = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Validate email format
    if (!isEmail(email)) {
      return res.status(400).json({ msg: 'Invalid email format' });
    }

    // Validate password format and length
    if (!isStrongPassword(password, { minLength: 8 })) {
      return res.status(400).json({ msg: 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    user = new User({
      email,
      password: hashedPassword,
      profile: {
        name
      }
    });

    // Save user to database
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ user: { id: user._id, email: user.email, name: user.name } }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while logging in' });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);

    const blacklistedToken = new BlacklistedToken({
      token,
      expiresAt: new Date(decoded.exp * 1000), // JWT expiration time
    });

    await blacklistedToken.save();

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred during logout' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, phone, address } = req.body;

    // Find the user by ID
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user profile details
    user.profile.name = name;
    user.email = email;
    user.profile.phone = phone;
    user.profile.address = address;

    // Save the updated user profile
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'An error occurred while updating user profile' });
  }
};