const express = require("express");
const router = express.Router();
const { createCryptoData } = require("../controllers/cryptoController");

router.get("/create", createCryptoData);

module.exports = router;