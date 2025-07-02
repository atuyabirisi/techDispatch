const express = require("express");
const router = express.Router();
const _ = require("lodash");
const User = require("../models/UserModel");
const { genSalt, hash } = require("bcrypt");

router.post("/", async (req, res) => {
  const { email } = req.body;

  let user = await User.findOne({ email });

  if (user) return res.status(400).send("User already registered");

  user = new User(_.pick(req.body, ["username", "email", "password"]));

  const salt = await genSalt(10);

  user.password = await hash(user.password, salt);

  await user.save();

  res.status(201).json({
    message: "User successfully registered",
    user: _.pick(user, ["email"]),
  });
});

module.exports = router;
