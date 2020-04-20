const express = require("express");

const router = express.Router();

const Register = require("../controllers/registration");

const { registerPlayer } = Register;

router.post("/", registerPlayer);

module.exports = router;
