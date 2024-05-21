const db = require("../models");
const { Op } = require("sequelize");

exports.getAllCart = async (id) => {
  try {
    const cart = await db.cart.findAll({ where: { userId: id } });
    console.log(cart);
    if (cart.length == 0) {
      return {
        status: false,
        message: "No cart found",
      };
    }
    return {
      status: true,
      message: "Cart found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.addCart = async (id, body) => {
  try {
    const { cartItems } = body;
    if (cartItems.length == 0) {
      return {
        status: false,
        message: "No cart items found",
      };
    }
    for (let i = 0; i < cartItems.length; i++) {
      await db.cart.create({ userId: id, productId: cartItems[i] });
    }
    return {
      status: true,
      message: "Cart Added",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.updateCart = async (id, body) => {
  try {
    const { cartItems } = body;
    if (cartItems.length == 0) {
      return {
        status: false,
        message: "No cart items found",
      };
    }
    await db.destroy({ where: { userId: id } });

    for (let i = 0; i < cartItems.length; i++) {
      await db.cart.destroy({
        [Op.and]: { userId: id, productId: cartItems[i] },
      });
    }
    return {
      status: true,
      message: "Cart Updated",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.deleteCart = async (id, body) => {
  try {
    const { cartItems } = body;
    if (cartItems.length == 0) {
      return {
        status: false,
        message: "No cart items found",
      };
    }
    for (let i = 0; i < cartItems.length; i++) {
      await db.cart.destroy({
        [Op.and]: { userId: id, productId: cartItems[i] },
      });
    }
    return {
      status: true,
      message: "Cart deleted",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};
