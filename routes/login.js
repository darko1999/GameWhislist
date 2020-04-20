const express = require("express");

const router = express.Router();

const Login = require("../controllers/login");

const { findPlayer } = Login;

router.post("/", findPlayer);

module.exports = router;
