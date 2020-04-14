const express = require("express");

const router = express.Router();

const Wishlist = require("../controllers/players");

const {
  getPlayers,
  addToWishlist,
  addPlayer,
  getPlayerGames,
  getGameById,
  deleteGame,
  clearWishlist,
} = Wishlist;

router.route("/").get(getPlayers).post(addPlayer).delete(clearWishlist);
router
  .route("/:id")
  .patch(addToWishlist)
  .get(getPlayerGames)
  .delete(deleteGame);
module.exports = router;
