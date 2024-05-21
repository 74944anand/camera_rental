const express = require("express");
const {
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");

const router = express.Router();

router.get("/:id", getAllOrders);
router.post("/:id", addOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
