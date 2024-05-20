var express = require("express");
var router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./users");

router.use("/", authRouter);
router.use("/user", userRouter);

module.exports = router;
