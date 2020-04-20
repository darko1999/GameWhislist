const Player = require("../models/player");
const bcrypt = require("bcrypt");

const findPlayer = async (req, res, next) => {
  let player = await Player.findOne({ name: req.body.name });
  if (!player) {
    return res.status(400).send("Player not found");
  }

  const validPassword = await bcrypt.compare(
    req.body.password,
    player.password
  );

  if (!validPassword) {
    return res.status(400).send("Wrong password");
  }
  res.send(true);
};
module.exports = { findPlayer };
