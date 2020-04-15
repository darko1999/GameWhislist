const express = require("express");

const router = express.Router();

const Wishlist = require("../controllers/players");

const {
  getPlayers,
  addToWishlist,
  addPlayer,
  getPlayerById,
  deleteGame,
  clearPlayers,
} = Wishlist;

router.route("/").get(getPlayers).post(addPlayer).delete(clearPlayers);
router.route("/:id").patch(addToWishlist).get(getPlayerById).delete(deleteGame);
module.exports = router;
