const Player = require("../models/player");
const bcrypt = require("bcrypt");

const registerPlayer = async (req, res, next) => {
  const player = new Player(req.body);
  player.password = await bcrypt.hash(req.body.password, 10);
  const save = await player.save();
  res.status(200).send(save);
};
module.exports = { registerPlayer };
