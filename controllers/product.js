const {
  getProductById,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../services/product");

exports.getProductById = async (req, res) => {
  try {
    const result = await getProductById(req.params.id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const result = await getAllProducts();
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.addProduct = async (req, res) => {
  try {
    const result = await addProduct(req.body, req.file);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.updateProduct = async (req, res) => {
  try {
    
    const result = await updateProduct(req.params.id, req.body, req.file);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
