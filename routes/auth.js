const express = require("express");
const { checkAuth } = require("../controllers/auth");
const router = express.Router();

router.post("/login", checkAuth);

router.get("/logout");

module.exports = router;
