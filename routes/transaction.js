const express = require("express");
const {
  getAllTransactions,
  addTransactions,
} = require("../controllers/transaction");

const router = express.Router();

router.get("/:id", getAllTransactions);
router.post("/:id", addTransactions);

module.exports = router;
