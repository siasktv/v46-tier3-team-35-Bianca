const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    image: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    },
    favorites: [ {type: Schema.Types.ObjectId, ref: "Crypto"}]
  }, {
      timestamps: true
  });

  module.exports = mongoose.model("User", userSchema);