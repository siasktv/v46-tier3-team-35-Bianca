const express = require("express");
const router = express.Router();
const { test, createUser, getUserById } = require("../controllers/userController");

// test route
router.get("/test", test);

// create a new user
router.post("/create", createUser)

// get user by id
router.get("/:userId", getUserById)

module.exports = router;
