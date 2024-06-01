const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authmiddleware = require('../middleware/authMiddleware');


// POST /api/register
router.post('/register', authController.register);

// POST /api/login
router.post('/login', authController.login);

// POST /api/logout
router.post('/logout', authmiddleware.verifyToken, authController.logout);

// Update user profile
router.put('/editprofile', authmiddleware.verifyToken, authController.updateUserProfile);

module.exports = router;
