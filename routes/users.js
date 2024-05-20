var express = require("express");
const {
  getUserById,
  addUser,
  getAllUser,
  updateUserById,
  deleteUserById,
  updateUserPassword,
} = require("../controllers/user");
const { checkAuth } = require("../utils/auth");
var router = express.Router();

router.get("/:id", checkAuth, getUserById);
router.post("/", addUser);
router.get("/", checkAuth, getAllUser);
router.put("/:id", checkAuth, updateUserById);
router.delete("/:id", checkAuth, deleteUserById);
router.put("/:id", checkAuth, updateUserPassword);

module.exports = router;
