"use strict";

module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "transaction_id",
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
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id",
        references: {
          model: "order",
          key: "id",
        },
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "payment_method",
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "amount",
      },
    },
    {
      tableName: "transaction",
      freezeTableName: true,
      paranoid:true,
      timestamps: true,
    }
  );

  transaction.associate = (models) => {
    transaction.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });
    transaction.belongsTo(models.order, {
      foreignKey: "orderId",
      as: "order",
    });
  };

  return transaction;
};
