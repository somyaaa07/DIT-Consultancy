const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  id:       { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:     { type: DataTypes.STRING(100), allowNull: false },
  email:    { type: DataTypes.STRING(150), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false },
  role:     { type: DataTypes.ENUM('jobseeker', 'employer'), defaultValue: 'jobseeker' },
  phone:    { type: DataTypes.STRING(20) },
  location: { type: DataTypes.STRING(100) },
  skills:   {
    type: DataTypes.TEXT,
    get() {
      const v = this.getDataValue('skills');
      return v ? JSON.parse(v) : [];
    },
    set(v) { this.setDataValue('skills', JSON.stringify(v)); }
  },
  experience_years: { type: DataTypes.INTEGER, defaultValue: 0 },
  bio: { type: DataTypes.TEXT }
}, {
  tableName: 'users',
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      user.password = await bcrypt.hash(user.password, 12);
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 12);
      }
    }
  }
});

// Login ke waqt password check karne ke liye
User.prototype.comparePassword = async function(pass) {
  return await bcrypt.compare(pass, this.password);
};

module.exports = User;