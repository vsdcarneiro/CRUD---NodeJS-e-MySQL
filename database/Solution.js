const Sequelize = require("sequelize");
const mysql = require("./connection");

const Solution = mysql.define("solution", {
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  issueId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Solution.sync({ force: false });

module.exports = Solution;
