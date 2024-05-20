var express = require("express");
var router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./users");
const productRouter = require("./product");

router.use("/", authRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);

module.exports = router;
