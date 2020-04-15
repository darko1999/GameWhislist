const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const game = new Schema({
  title: String,
  price: Number,
  year: Number,
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  description: String,
  publisher: String,
  discount: Number,
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "player",
    },
  ],
});
const Game = mongoose.model("game", game);
module.exports = Game;
