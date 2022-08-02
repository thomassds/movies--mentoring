const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Seasons extends Model {}

Seasons.init(
  {
    id_movie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "seasons",
    timestamps: true,
  }
);

module.exports = Seasons;
