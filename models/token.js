"use strict";

module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define(
    "token",
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
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "token",
      freezeTableName: true,
    }
  );

  token.associate = (models) => {
    token.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return token;
};
