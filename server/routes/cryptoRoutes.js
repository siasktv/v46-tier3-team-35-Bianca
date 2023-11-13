const express = require("express");
const router = express.Router();
const { createCryptoData, getCryptoData, getCryptoDataById } = require("../controllers/cryptoController");

router.post("/create", createCryptoData);
<<<<<<< HEAD
=======
router.get("/", getCryptoData );
router.get("/:id", getCryptoDataById);
>>>>>>> 079c8786787b9429f45272d4cd5a841ec5fbe807

module.exports = router;