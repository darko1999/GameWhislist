const Game = require("../models/game");
const Category = require("../models/category");

const sortGames = (a, b, value) => {
  if (a[value] < b[value]) {
    return -1;
  }
  if (a[value] > b[value]) {
    return 1;
  }
  return 0;
};

const showAllGames = async (req, res, next) => {
  let game = await Game.find({});
  let games = game;
  if (req.query.sort === "price") {
    if (req.query.order === "asc")
      games = game.sort((a, b) => sortGames(a, b, "price"));
    if (req.query.order === "desc")
      games = game.sort((a, b) => sortGames(a, b, "price")).reverse();
  }
  if (req.query.sort === "discount") {
    if (req.query.order === "asc")
      games = game.sort((a, b) => sortGames(a, b, "discount"));
    if (req.query.order === "desc")
      games = game.sort((a, b) => sortGames(a, b, "discount")).reverse();
  } else games = game;
  if (req.query.limit)
    game = await Game.find({}).limit(parseInt(req.query.limit));
  res.status(200).send(games);
};

const getGameByTitle = async (req, res, next) => {
  const { title } = req.params;
  const game = await Game.find().where("title").equals(new RegExp(title, "i"));
  if (game.length === 0) {
    res.status(200).send({ err: "Doslo je do greske" });
  } else {
    res.status(200).send({ game });
  }
};
const getGameById = async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findById(id).populate("players");
  res.status(200).send({ game });
};
const getGameDescription = async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findById(id);
  const desc = game.description;
  res.status(200).send({ desc });
};
const addGame = async (req, res, next) => {
  const category = await Category.findById(req.body.category);
  const game = {
    title: req.body.title,
    year: req.body.year,
    price: req.body.price,
    publisher: req.body.publisher,
    description: req.body.description,
    discount: req.body.discount,
    category: category,
  };
  if (category) {
    delete game.category;
    const newGame = new Game(game);
    newGame.category = category.name;
    const save = await newGame.save();
    category.games.push(newGame);
    const saveC = await category.save();
    res.status(201).send({ game: save, category: saveC });
  } else res.status(200).send({ error: "Wrong category" });
};
const deleteGame = async (req, res, next) => {
  const { id } = req.params;
  await Game.findByIdAndDelete(id);
  res.status(200).send({ msg: "Game is deleted" });
};
const updateGame = async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  await Game.findByIdAndUpdate(id, update);
  res.status(200).send({ msg: "Game is updated" });
};
const clearGames = async (req, res, next) => {
  await Game.deleteMany();
  res.status(200).send("No games");
};

module.exports = {
  showAllGames,
  getGameDescription,
  getGameById,
  getGameByTitle,
  addGame,
  deleteGame,
  updateGame,
  clearGames,
};
