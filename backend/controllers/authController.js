const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Token banane ka function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// ✅ REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, phone, location } = req.body;

    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ message: 'this email is already register' });

    const user = await User.create({ name, email, password, role, phone, location });
    const token = generateToken(user.id);

    res.status(201).json({
      message: 'Account has been created',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Email or password must be incorrect' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Email or password must be incorrect' });

    const token = generateToken(user.id);

    res.json({
      message: 'You have Loged In',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ APNA PROFILE DEKHO
exports.getMe = async (req, res) => {
  res.json({ user: req.user });
};

// ✅ PROFILE UPDATE KARO
exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, location, bio, skills, experience_years } = req.body;
    await req.user.update({ name, phone, location, bio, skills, experience_years });
    res.json({ message: 'Profile Updated', user: req.user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};