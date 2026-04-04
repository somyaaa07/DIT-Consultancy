const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Blog = sequelize.define('Blog', {
  id:       { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title:    { type: DataTypes.STRING(200), allowNull: false },
  content:  { type: DataTypes.TEXT('long'), allowNull: false },
  excerpt:  { type: DataTypes.TEXT },        // short summary
  image:    { type: DataTypes.STRING(255) }, // image URL
  author:   { type: DataTypes.STRING(100), defaultValue: 'Admin' },
  category: {
    type: DataTypes.ENUM('Technology', 'Career', 'Interview Tips', 'Resume', 'Work Life', 'Other'),
    defaultValue: 'Other'
  },
  is_published: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
  tableName: 'blogs',
  timestamps: true
});

module.exports = Blog;