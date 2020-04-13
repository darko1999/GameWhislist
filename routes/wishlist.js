const express = require("express");

const router = express.Router();

const Wishlist = require("../controllers/wishlist");

const {
  getWishlist,
  addToWishlist,
  getGameById,
  deleteGame,
  clearWishlist,
} = Wishlist;

router.route("/").get(getWishlist).post(addToWishlist).delete(clearWishlist);
router.route("/:id").get(getGameById).delete(deleteGame);
module.exports = router;
