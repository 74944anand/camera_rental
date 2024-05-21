"use strict";

module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
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
      tableName: "order",
      freezeTableName: true,
      paranoid: true,
      timestamps: true,
    }
  );

  order.associate = (models) => {
    order.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });
    order.belongsTo(models.product, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return order;
};
