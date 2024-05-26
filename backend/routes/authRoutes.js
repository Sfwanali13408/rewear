const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/register
router.post('/register', authController.register);

// POST /api/login
router.post('/login', authController.login);

// POST /api/logout
router.post('/logout', authController.logout);

module.exports = router;
