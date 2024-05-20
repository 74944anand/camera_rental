var express = require("express");
const { getUserById, addUser } = require("../controllers/user");
const { checkAuth } = require("../utils/auth");
var router = express.Router();

router.get("/:id", checkAuth, getUserById);
router.post("/", addUser);

module.exports = router;
