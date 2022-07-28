const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Movie extends Model {}

Movie.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avaliation: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    serie: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "movies",
    timestamps: true,
  }
);

module.exports = Movie;
