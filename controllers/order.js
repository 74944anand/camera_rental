const {
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../services/order");

exports.getAllOrders = async (req, res) => {
  try {
    const result = await getAllOrders(req.params.id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};

exports.addOrder = async (req, res) => {
  try {
    const result = await addOrder(req.params.id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.updateOrder = async (req, res) => {
  try {
    const result = await updateOrder(req.params.id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    const result = await deleteOrder(req.params.id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
