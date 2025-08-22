const express = require("express");
const router = express.Router();
const CommentModel = require("../models/commentModel");

router.post("/", async (req, res) => {
  try {
    const { article, comment, commenter } = req.body;

    let newComment = new CommentModel({
      article: article,
      comment: comment,
      commenter: commenter,
    });

    await newComment.save();

    res.status(200).send("comment posted successfully");
  } catch (err) {
    (err) => console.log(err);
  }
});

router.get("/", async (req, res) => {
  const activeStory = req.header("x-active-story-id");

  if (!activeStory) {
    return res.status(400).json({ error: "Missing x-active-story-id header" });
  }

  const allComments = await CommentModel.find();

  const comments = allComments.filter(
    (c) => c.article.toString() === activeStory
  );

  res.send(comments);
});

module.exports = router;
