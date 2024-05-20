"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "product_name",
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "product_price",
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: "is_available",
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("product");
  },
};
