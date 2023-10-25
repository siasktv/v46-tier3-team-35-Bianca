const express = require("express");
const router = express.Router();
const { test, createUser } = require("../controllers/userController");

// test route
router.get("/test", test);

// create a new user
router.post("/create", createUser)

module.exports = router;
