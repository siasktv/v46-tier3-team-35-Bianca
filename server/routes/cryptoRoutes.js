const express = require("express");
const router = express.Router();
const { createCryptoData } = require("../controllers/cryptoController");

router.post("/create", createCryptoData);
//

module.exports = router;