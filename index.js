const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/games", { useNewUrlParser: true })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.log(err));
const games = require("./routes/games");
const wishlist = require("./routes/wishlist");

app.use("/api/v1/games", games);
app.use("/api/v1/wishlist", wishlist);
app.listen(3000, () => console.log("server started"));
