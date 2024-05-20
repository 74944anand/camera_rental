"use strict";

module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define(
    "role",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      roleType: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "role_type",
      },
    },
    {
      tableName: "role",
      freezeTableName: true,
    }
  );

  return role;
};
