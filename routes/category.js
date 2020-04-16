const express = require("express");

const router = express.Router();

const Category = require("../controllers/category");

const {
  getCategories,
  addCategory,
  deleteCategory,
  getCategoryById,
} = Category;

router.route("/").get(getCategories).post(addCategory);
router.route("/:id").get(getCategoryById).delete(deleteCategory);
module.exports = router;
