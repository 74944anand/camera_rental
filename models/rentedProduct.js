"use strict";

module.exports = (sequelize, DataTypes) => {
  const rentedProduct = sequelize.define(
    "rentedProduct",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_Id",
        references: {
          model: "user",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_Id",
        references: {
          model: "product",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      tableName: "rentedProduct",
      paranoid: true,
      freezeTableName: true,
    }
  );

  rentedProduct.associate = (models) => {
    rentedProduct.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });
    rentedProduct.belongsTo(models.product, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return rentedProduct;
};
