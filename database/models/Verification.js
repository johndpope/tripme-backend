const { DataTypes } = require("sequelize");
const db = require("../index");

const Verification = db.define(
  "Verification",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "verifications",
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = Verification;
