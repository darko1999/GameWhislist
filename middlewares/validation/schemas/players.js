const Joi = require("joi");

const addPlayerSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const addWishSchema = Joi.object({
  game: Joi.string()
    .regex(/^[0-9a-f]{24}$/)
    .required(),
});

module.exports = { addPlayerSchema, addWishSchema };
