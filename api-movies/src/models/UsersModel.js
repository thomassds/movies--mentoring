const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Users extends Model {}

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
  }
);

module.exports = Users;
