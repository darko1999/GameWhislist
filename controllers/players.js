const Player = require("../models/player");
const Game = require("../models/game");

const getPlayers = async (req, res, next) => {
  const player = await Player.find({});
  res.status(200).send({ player });
};
const addPlayer = async (req, res, next) => {
  const newPlayer = { name: req.body.name };
  const player = new Player(newPlayer);
  const save = await player.save();
  res.status(201).send(save);
};
const addToWishlist = async (req, res, next) => {
  const { id } = req.params;
  // Create a new car
  const game = await Game.findById(req.body.game);
  const player = await Player.findById(id);
  game.players = player;
  const save = await game.save();
  player.games.push(game);

  await player.save();
  res.status(201).send(save);
};
const getPlayerGames = async (req, res, next) => {
  const { id } = req.params;
  const wishlist = await Player.findById(id).populate("games");
  res.status(200).send({ wishlist });
};
const deleteGame = async (req, res, next) => {
  const { id } = req.params;
  const player = await Player.findById(id);
  const game = req.body.game;
  for (let i = 0; i < player.games.length; i++)
    if (player.wishlist.games[i].id === game) {
      await game.delete;
      res.status(200).send({ msg: "Game is deleted" });
      break;
    }
};
const clearWishlist = async (req, res, next) => {
  await Player.deleteMany();
  res.status(200).send("Empty wishlist");
};
module.exports = {
  getPlayers,
  addPlayer,
  addToWishlist,
  getPlayerGames,
  deleteGame,
  clearWishlist,
};
