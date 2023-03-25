const Sequelize = require("sequelize");
const config = require("config");

const { database, username, password, host, dialect } = config.get("mysql");

module.exports = new Sequelize(database, username, password, {
  host,
  dialect,
});
