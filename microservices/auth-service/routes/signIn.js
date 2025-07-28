const express = require("express");
const router = express.Router();
const { compare } = require("bcrypt");
const User = require("../models/UserModel");
const authorizationMiddleware = require("../middleware/authorization");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await compare(password, user.password);

  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = user.generateAuthToken();

  res.status(200).json({ token: token });
});

router.get("/", authorizationMiddleware, async (req, res) => {
  const userId = req.user._id;

  const currentUser = await User.findById(userId).select("-password");

  res.status(200).send(currentUser);
});

module.exports = router;
