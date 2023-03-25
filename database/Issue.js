const Sequelize = require("sequelize");
const mysql = require("./connection");

const Issue = mysql.define("issue", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Issue.sync({ force: false });

module.exports = Issue;
