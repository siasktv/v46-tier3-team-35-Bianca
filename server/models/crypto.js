const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    name: { type: String, required: true },
    logo: {
        type: String,
        required: true,
    },
    cateogry: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Crypto", cryptoSchema);