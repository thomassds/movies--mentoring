const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Actor extends Model {}

Actor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avaliation: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "actors",
    timestamps: true,
  }
);

module.exports = Actor;
