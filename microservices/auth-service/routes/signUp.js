const express = require("express");
const router = express.Router();
const _ = require("lodash");
const User = require("../models/UserModel");
const { genSalt, hash } = require("bcrypt");
const logger = require("../utils/logger");

router.post("/", async (req, res, next) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user)
      return res.status(400).json({ message: "User already registered" });

    user = new User(_.pick(req.body, ["username", "email", "password"]));
    const salt = await genSalt(10);

    user.password = await hash(user.password, salt);

    await user.save();

    res.status(201).json({
      message: "User successfully registered",
      user: _.pick(user, ["email"]),
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
