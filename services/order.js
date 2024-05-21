const db = require("../models");
const { Op } = require("sequelize");

exports.getAllOrders = async (id) => {
  try {
    const order = await db.order.findAll({ where: { userId: id } });
    if (order.length == 0) {
      return {
        status: false,
        message: "No order found",
      };
    }
    return {
      status: true,
      message: "Orders found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.addOrder = async (id, body) => {
  try {
    const { orderItems } = body;
    if (orderItems.length == 0) {
      return {
        status: false,
        message: "No order items found",
      };
    }
    for (let i = 0; i < orderItems.length; i++) {
      await db.order.create({ userId: id, productId: orderItems[i] });
    }
    return {
      status: true,
      message: "Order Added",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.updateOrder = async (id, body) => {
  try {
    const { orderItems } = body;
    if (orderItems.length == 0) {
      return {
        status: false,
        message: "No order items found",
      };
    }
    await db.order.destroy({ where: { userId: id } });

    for (let i = 0; i < orderItems.length; i++) {
      await db.order.destroy({
        [Op.and]: { userId: id, productId: orderItems[i] },
      });
    }
    return {
      status: true,
      message: "Order Updated",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.deleteOrder = async (id, body) => {
  try {
    const { orderItems } = body;
    if (orderItems.length == 0) {
      return {
        status: false,
        message: "No order items found",
      };
    }
    for (let i = 0; i < cartItems.length; i++) {
      await db.order.destroy({
        [Op.and]: { userId: id, productId: orderItems[i] },
      });
    }
    return {
      status: true,
      message: "Order deleted",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};
