const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Episode = require("./EpisodeModel");

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

Seasons.hasMany(Episode, { foreignKey: "id_season", as: "episodes" });

module.exports = Seasons;
