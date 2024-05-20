"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
    },
    {
      timestamps: true,
      tableName: "user",
      paranoid: true,
      freezeTableName: true,
    }
  );

  user.associate = (models) => {
    user.hasMany(models.rentedProduct, {
      foreignKey: "userId",
      as: "rentedProducts",
    });
    user.hasOne(models.token, {
      foreignKey: "userId",
      as: "token",
    });
  };

  return user;
};
