const { Sequelize } = require('sequelize');
const { dbConfig } = require('../config');

const sequelize = new Sequelize(
  dbConfig.pgDatabase,
  dbConfig.pgUser,
  dbConfig.pgPassword,
  { host: dbConfig.pgHost, dialect: 'postgres' }
);

module.exports = sequelize;