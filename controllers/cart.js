const {
  addCart,
  updateCart,
  deleteCart,
  getAllCart,
} = require("../services/cart");

exports.getAllCart = async (req, res) => {
  try {
    const result = await getAllCart(req.params.id);
    console.log(result.status);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};

exports.addCart = async (req, res) => {
  try {
    const result = await addCart(req.params.id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.updateCart = async (req, res) => {
  try {
    const result = await updateCart(req.params.id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.deleteCart = async (req, res) => {
  try {
    const result = await deleteCart(req.params.id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
