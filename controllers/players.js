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
  try {
    const { id } = req.params
    const { game } = req.body

    const player = await Player.findById(id)
    const igra = await Game.findById(game)
    if (player.games.includes(game)) {
      res.status(200).send({ msg: 'Igra vec postoji u wishlist-i!' })
    } else {
      igra.players.push(id)
      const save = await igra.save()
      player.games.push(game)
      await player.save()
      res.status(201).send(save)
    }
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getPlayerById = async (req, res, next) => {
  const { id } = req.params;
  const player = await Player.findById(id).populate("games");
  res.status(200).send({ player });
};
const deleteGame = async (req, res, next) => {
  const { id } = req.params;
  const game = req.body.game;

  await Player.updateOne({ _id: id }, { $pull: { games: { $in: game } } });

  res.status(200).send({ msg: "Game is deleted" });
};
const clearPlayers = async (req, res, next) => {
  await Player.deleteMany();
  res.status(200).send("Empty wishlist");
};
module.exports = {
  getPlayers,
  addPlayer,
  addToWishlist,
  getPlayerById,
  deleteGame,
  clearPlayers,
};
