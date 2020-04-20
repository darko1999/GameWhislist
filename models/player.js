const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const player = new Schema({
  name: String,
  password: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
});
const Wishlist = mongoose.model("player", player);
module.exports = Wishlist;
