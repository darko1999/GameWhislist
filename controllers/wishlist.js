const Wishlist = require("../models/whishlist");
const Game = require("../models/game");

const getWishlist = async (req, res, next) => {
  const whishlist = await Wishlist.find({});
  res.status(200).send({ whishlist });
};
const addToWishlist = async (req, res, next) => {
  const game = await Game.findById(req.body.game);
  const title = game.title;
  const newWish = req.body;
  delete newWish.game;
  const wish = new Wishlist(newWish);
  wish.game = game;
  wish.title = title;
  await wish.save();
  res.status(201).send(wish);
};
const getGameById = async (req, res, next) => {
  const { id } = req.params;
  const game = await Wishlist.findById(id);
  res.status(200).send({ game });
};
const deleteGame = async (req, res, next) => {
  const { id } = req.params;
  await Wishlist.findById(id);
  res.status(200).send({ msg: "Game is deleted" });
};
const clearWishlist = async (req, res, next) => {
  await Wishlist.deleteMany();
  res.status(200).send("Empty wishlist");
};
module.exports = {
  getWishlist,
  addToWishlist,
  getGameById,
  deleteGame,
  clearWishlist,
};
