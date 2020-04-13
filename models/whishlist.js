const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const wishlist = new Schema({
  game: [
    {
      type: Schema.Types.ObjectId,

      ref: "game",
    },
  ],
  title: String,
});
const Wishlist = mongoose.model("wishlist", wishlist);
module.exports = Wishlist;
