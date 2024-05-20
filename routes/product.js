const express = require("express");
const upload = require("../utils/upload");
const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", upload.single("file"), addProduct);
router.put("/:id", upload.single('file'), updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
