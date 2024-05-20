"use strict";

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "product_name",
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "product_price",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "product_image",
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "is_available",
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      tableName: "product",
      paranoid: true,
      freezeTableName: true,
    }
  );
  return product;
};
