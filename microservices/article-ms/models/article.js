const { Schema, model } = require("mongoose");

const ArticleModel = model(
  "article",
  new Schema(
    {
      tittle: { type: String, required: true },
      content: { type: String, required: true },
      cover: { type: String, required: true },
      category: {
        type: String,
        required: true,
        enum: [
          "CI/CD & Pipelines",
          "Docker & Containerization",
          "Cloud & Infrastructure (Azure)",
          "DevOps Practices",
        ],
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = ArticleModel;
