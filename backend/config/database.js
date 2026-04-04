const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySqL is connected');
    await sequelize.sync({ alter: true });
    console.log('Tables are ready');
  } catch (error) {
    console.error('MySQL is not connected:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };