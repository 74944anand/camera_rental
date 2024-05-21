"use strict";

module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
          model: "user",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
        references: {
          model: "product",
          key: "id",
        },
      },
    },
    {
      tableName: "cart",
      freezeTableName: true,
      timestamps: true,
    }
  );

  cart.associate = (models) => {
    cart.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });
    cart.belongsTo(models.product, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return cart;
};
