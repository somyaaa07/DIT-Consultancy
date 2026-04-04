const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Application = sequelize.define('Application', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  job_id:       { type: DataTypes.INTEGER, allowNull: false },
  user_id:      { type: DataTypes.INTEGER, allowNull: false },
  cover_letter: { type: DataTypes.TEXT },
  status: {
    type: DataTypes.ENUM('applied', 'reviewed', 'shortlisted', 'rejected', 'hired'),
    defaultValue: 'applied'
  }
}, {
  tableName: 'applications',
  timestamps: true
  // ❌ indexes wali line hata di — yahi problem thi
});

module.exports = Application;