const request = require("supertest");
const mongoose = require("mongoose");
const path = require("path");
const ArticleModel = require("../../models/article");
const { connectToDB, closeDbConnection } = require("../../dbconfig");
const app = require("../../index");

describe("GET /cicd", () => {
  beforeAll(async () => await connectToDB());

  beforeEach(async () => await ArticleModel.deleteMany());

  afterAll(async () => await closeDbConnection());

  afterEach(() => jest.restoreAllMocks());

  it("should return up to 4 articles in CI/CD & Pipelines category", async () => {
    const articles = Array.from({ length: 4 }, (_, i) => ({
      tittle: `Article ${i}`,
      content: "Sample content",
      category: "CI/CD & Pipelines",
      cover: "test-image.webp",
    }));

    await ArticleModel.insertMany(articles);

    const response = await request(app).get("/cicd");

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(4);
  });

  it("should return empty array if no CI/CD articles exist", async () => {
    const res = await request(app).get("/cicd");

    expect(res.status).toBe(200);

    expect(res.body).toEqual([]);
  });

  it("should return 500 if DB query fails", async () => {
    jest.spyOn(ArticleModel, "find").mockImplementationOnce(() => {
      throw new Error("DB failure");
    });

    const res = await request(app).get("/cicd");

    expect(res.status).toBe(500);
  });
});
