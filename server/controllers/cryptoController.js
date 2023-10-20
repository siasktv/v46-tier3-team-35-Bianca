const Crypto = require("../models/crypto");
const axios = require("axios");
// fetch crypto data
const createCryptoData = async (req, res) => {
    try{
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const cryptoData = response.data?.map((crypto) => {
            return {
                name: crypto.name,
                image: crypto.image,
                price: crypto.current_price,
            }
        });
    // Save the cryptoData to MongoDB
    await Crypto.insertMany(cryptoData);

    res.status(200).send("Crypto data saved to the database");
    } catch(error){
        console.error(error);
        res.status(500).send({ message: "An error occurred while saving crypto data."});
    }
}

module.exports = {
    createCryptoData
  };
  