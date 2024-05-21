const db = require("../models");
const { Op } = require("sequelize");
const transaction = require("../models/transaction");

exports.getAlltransactions = async (id) => {
  try {
    const transaction = await db.transaction.findAll({ where: { userId: id } });
    if (!transaction) {
      return {
        status: false,
        message: "No transaction found",
      };
    }
    return {
      status: true,
      message: "transactions found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.addTransaction = async (id, body) => {
  try {
    await db.transaction.create({
      userId: id,
      transactionId,
      orderId,
      paymentMethod,
      amount,
    });
    return {
      status: true,
      message: "transaction Added",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

// exports.updateTransaction = async (id, body) => {
//   try {
//     await db.transaction.destroy({ where: { userId: id } });
//     for (let i = 0; i < transactionItems.length; i++) {
//       await db.transaction.destroy({
//         [Op.and]: { userId: id, productId: transactionItems[i] },
//       });
//     }
//     return {
//       status: true,
//       message: "transaction Updated",
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: false,
//       message: "Something went wrong",
//     };
//   }
// };

// exports.deleteTransaction = async (id, body) => {
//   try {
//     const { transactionItems } = body;
//     for (let i = 0; i < cartItems.length; i++) {
//       await db.transaction.destroy({
//         [Op.and]: { userId: id, productId: transactionItems[i] },
//       });
//     }
//     return {
//       status: true,
//       message: "transaction deleted",
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       status: false,
//       message: "Something went wrong",
//     };
//   }
// };
