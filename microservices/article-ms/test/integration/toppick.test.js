const request = require("supertest");
const ArticleModel = require("../../models/article");
const app = require("../../index");
const { connectToDB, closeDbConnection } = require("../../dbconfig");

describe("GET /top_pick", () => {
  beforeAll(async () => await connectToDB());

  beforeEach(async () => await ArticleModel.deleteMany());

  afterAll(async () => await closeDbConnection());

  it("should return the latest/newest article", async () => {
    await ArticleModel.create({
      tittle: "Old Article",
      content: "Sample content",
      category: "Docker & Containerization",
      cover: "test-image.webp",
      createdAt: new Date("2024-01-01"),
    });

    await ArticleModel.create({
      tittle: "New Article",
      content: "Sample content",
      category: "Docker & Containerization",
      cover: "test-image.webp",
      createdAt: new Date("2025-01-01"),
    });

    const response = await request(app).get("/top_pick");

    console.log(response.body);

    expect(response.status).toBe(200);

    expect(response.body[0].tittle).toContain("New Article");
  });
});
