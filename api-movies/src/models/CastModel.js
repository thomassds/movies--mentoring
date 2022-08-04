const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Cast extends Model {}

Cast.init(
  {
    id_movie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_actor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "casts",
    timestamps: true,
  }
);

module.exports = Cast;
