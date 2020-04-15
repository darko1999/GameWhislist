const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const category = new Schema({
  name: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
});
const Category = mongoose.model("category", category);
module.exports = Category;
