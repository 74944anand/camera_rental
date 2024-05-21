const {
  getAlltransactions,
  addTransaction,
} = require("../services/transaction");

exports.getAllTransactions = async (req, res) => {
  try {
    const result = await getAlltransactions(req.params.id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};

exports.addTransactions = async (req, res) => {
  try {
    const result = await addTransaction(req.params.id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
//   exports.updateCart = async (req, res) => {
//     try {
//       const result = await updateCart(req.params.id, req.body);
//       if (!result.status) {
//         res.status(400).json(result);
//       }
//       res.status(200).json(result);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json("Something Went Wrong");
//     }
//   };
//   exports.deleteCart = async (req, res) => {
//     try {
//       const result = await deleteCart(req.params.id);
//       if (!result.status) {
//         res.status(400).json(result);
//       }
//       res.status(200).json(result);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json("Something Went Wrong");
//     }
//   };
