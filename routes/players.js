const express = require("express");

const router = express.Router();

const Wishlist = require("../controllers/players");
const { validation } = require("../middlewares/validation/validation");
const {
  addPlayerSchema,
  addWishSchema,
} = require("../middlewares/validation/schemas/players");

const {
  getPlayers,
  addToWishlist,
  addPlayer,
  getPlayerById,
  deleteGame,
  clearPlayers,
} = Wishlist;

router
  .route("/")
  .get(getPlayers)
  .post(validation(addPlayerSchema), addPlayer)
  .delete(clearPlayers);
router
  .route("/:id")
  .patch(validation(addWishSchema), addToWishlist)
  .get(getPlayerById)
  .delete(deleteGame);
module.exports = router;
