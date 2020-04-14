const Joi = require("joi");

const addWishSchema = Joi.object({
  game: Joi.string.required,
});
module.exports = addWishSchema;
