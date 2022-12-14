const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Episode extends Model {}

Episode.init(
  {
    id_movie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_season: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "episodes",
    timestamps: true,
  }
);

module.exports = Episode;
