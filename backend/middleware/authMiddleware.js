const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../models/BlacklistedToken');

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  console.log('Token received:', token); // Add this line for debugging

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required' });
  }

  try {
    // Check if the token is blacklisted
    const blacklistedToken = await BlacklistedToken.findOne({ token });
    if (blacklistedToken) {
      return res.status(401).json({ message: 'Token has been blacklisted' });
    }

    // Verify the token and extract user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded); // Add this line for debugging

    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Token verification error:', error); // Add this line for debugging
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    }
    res.status(401).json({ message: 'Invalid token' });
  }
};
