var express = require("express");
var router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./users");
const productRouter = require("./product");
const orderRouter = require("./order");
const transactionRouter = require("./transaction");
const cartRouter = require("./cart");

router.use("/", authRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);
router.use("/transaction", transactionRouter);

module.exports = router;
