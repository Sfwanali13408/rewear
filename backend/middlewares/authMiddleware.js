const BlacklistedToken = require('../models/BlacklistedToken');
const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required' });
  }

  try {

     // Check if the token is blacklisted
     const blacklistedToken = await BlacklistedToken.findOne({ token });

     if (blacklistedToken) {
       return res.status(401).json({ message: 'Token has been blacklisted' });
     }
 

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
