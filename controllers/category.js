const Category = require("../models/category");

const getCategories = async (req, res, next) => {
  const category = await Category.find({});
  res.status(200).send(category);
};
const addCategory = async (req, res, next) => {
  const category = { name: req.body.name };
  const newCategory = new Category(category);
  const save = await newCategory.save();
  res.status(201).send({ msg: "Category is added", game: save });
};
const getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id).populate("games");
  res.status(200).send({ category });
};
const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  await Category.findByIdAndRemove(id);
  res.status(200).send({ msg: "Category is deleted" });
};
module.exports = {
  getCategories,
  addCategory,
  getCategoryById,
  deleteCategory,
};
