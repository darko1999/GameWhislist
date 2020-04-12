const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const game = new Schema({
  title: String,
  price: Number,
  year: Number,
  category: String,
  description: String,
  publisher: String,
  discount: Number,
});
const Game = mongoose.model("game", game);
module.exports = Game;
