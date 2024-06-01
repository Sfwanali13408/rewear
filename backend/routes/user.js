// routes/user.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // Authentication middleware
const User = require('../models/User'); // User model

// GET user details
router.get('/user', authMiddleware, async (req, res) => {
  try {
    // Fetch user details based on the authenticated user's ID
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
