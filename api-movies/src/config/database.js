const Sequelize = require("sequelize");
const sequelize = new Sequelize("api-movies", "user", "password", {
  dialect: "sqlite",
  host: "./src/sqlite/dev.sqlite",
});

module.exports = sequelize;
