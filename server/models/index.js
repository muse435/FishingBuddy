const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];

const db = {};

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const Catch = sequelize.import('./catch');
db[Catch.name] = Catch;

db.sequelize = sequelize;

module.exports = db;
