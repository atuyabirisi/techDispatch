const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    article: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    commenter: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel;
