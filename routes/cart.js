const express = require("express");
const {
  addCart,
  getAllCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

const router = express.Router();

router.get("/:id", getAllCart);
router.post("/:id", addCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;
