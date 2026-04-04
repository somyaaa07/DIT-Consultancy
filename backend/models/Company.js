const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Company = sequelize.define('Company', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:        { type: DataTypes.STRING(150), allowNull: false, unique: true },
  description: { type: DataTypes.TEXT, allowNull: false },
  industry:    { type: DataTypes.STRING(100), allowNull: false },
  size:        { type: DataTypes.STRING(20) },
  website:     { type: DataTypes.STRING(255) },
  city:        { type: DataTypes.STRING(100) },
  email:       { type: DataTypes.STRING(150), allowNull: false },
  phone:       { type: DataTypes.STRING(20) },
  owner_id:    { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'companies',
  timestamps: true
});

module.exports = Company;