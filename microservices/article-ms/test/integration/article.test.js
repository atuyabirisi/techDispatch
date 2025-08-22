const request = require("supertest");
const path = require("path");
const mongoose = require("mongoose");
const ArticleModel = require("../../models/article");
const { connectToDB, closeDbConnection } = require("../../dbconfig");
const app = require("../../index");

describe("/article", () => {
  beforeAll(async () => await connectToDB());

  beforeEach(async () => await ArticleModel.deleteMany());

  afterAll(async () => await closeDbConnection());

  describe("POST /article", () => {
    it("should upload an article", async () => {
      const res = await request(app)
        .post("/article")
        .field("tittle", "Test Tittle")
        .field("content", "Sample content")
        .field("category", "Docker & Containerization")
        .attach("cover", path.join(__dirname, "test-image.webp"));

      expect(res.status).toBe(200);

      expect(res.text).toContain("Article uploaded successfully");
    });
  });

  describe("GET /article/:id", () => {
    it("should return an article if valid id is passed", async () => {
      const newArticle = new ArticleModel({
        tittle: "Test Tittle",
        content: "Sample content",
        category: "Docker & Containerization",
        cover: "test-image.webp",
      });

      await newArticle.save();

      const response = await request(app).get(`/article/${newArticle._id}`);

      expect(response.status).toBe(200);

      expect(response.body).toHaveProperty("tittle", "Test Tittle");
    });

    it("should return 400 if id is invalid", async () => {
      const res = await request(app).get("/article/1");

      expect(res.status).toBe(400);

      expect(res.body).toHaveProperty("error", "Invalid ID");
    });

    it("should return 404 if article not found", async () => {
      const fakeId = new mongoose.Types.ObjectId();

      const res = await request(app).get(`/article/${fakeId}`);

      expect(res.status).toBe(404);

      expect(res.body).toHaveProperty("error", "Post not found");
    });
  });
});
