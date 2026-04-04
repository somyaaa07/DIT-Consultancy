const jwt = require('jsonwebtoken');
const { User } = require('../models');

const protect = async (req, res, next) => {
  try {
  
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Please do first Login' });
    }

  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

 
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: 'Did not find user' });

    req.user = user;
    next();

  } catch (error) {
    res.status(401).json({ message: 'Token is invalid' });
  }
};

// Sirf employer access kar sakta hai
const employerOnly = (req, res, next) => {
  if (req.user.role !== 'employer') {
    return res.status(403).json({ message: 'Only employers can you do this ' });
  }
  next();
};

module.exports = { protect, employerOnly };