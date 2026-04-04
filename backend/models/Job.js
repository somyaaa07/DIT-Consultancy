const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Job = sequelize.define('Job', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title:       { type: DataTypes.STRING(150), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  skills_required: {
    type: DataTypes.TEXT,
    get() {
      const v = this.getDataValue('skills_required');
      return v ? JSON.parse(v) : [];
    },
    set(v) { this.setDataValue('skills_required', JSON.stringify(v)); }
  },
  job_type: {
    type: DataTypes.ENUM('Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'),
    allowNull: false
  },
  experience_min: { type: DataTypes.INTEGER, defaultValue: 0 },
  experience_max: { type: DataTypes.INTEGER, defaultValue: 5 },
  salary_min:  { type: DataTypes.INTEGER },
  salary_max:  { type: DataTypes.INTEGER },
  location:    { type: DataTypes.STRING(150) },
  category:    { type: DataTypes.STRING(100), allowNull: false },
  openings:    { type: DataTypes.INTEGER, defaultValue: 1 },
  deadline:    { type: DataTypes.DATE },
  status: {
    type: DataTypes.ENUM('active', 'closed'),
    defaultValue: 'active'
  },
  company_id:  { type: DataTypes.INTEGER, allowNull: false },
  posted_by:   { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'jobs',
  timestamps: true
  // ❌ indexes wali lines hata di — yahi problem thi
});

module.exports = Job;