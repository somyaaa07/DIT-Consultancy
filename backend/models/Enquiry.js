const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Enquiry = sequelize.define('Enquiry', {
  id:      { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:    { type: DataTypes.STRING(100), allowNull: false },
  email:   { type: DataTypes.STRING(150), allowNull: false },
  phone:   { type: DataTypes.STRING(20) },
  company: { type: DataTypes.STRING(150) },
  type: {
    type: DataTypes.ENUM(
      'Job Seeker', 'Employer / Hiring', 'Partnership',
      'Press & Media', 'General Enquiry'
    ),
    allowNull: false
  },
  message: { type: DataTypes.TEXT, allowNull: false },
  status: {
    type: DataTypes.ENUM('new', 'read', 'replied'),
    defaultValue: 'new'
  }
}, {
  tableName: 'enquiries',
  timestamps: true
});

module.exports = Enquiry;