const request = require("supertest");
const app = require("../../index");
const ArticleModel = require("../../models/article");
const { connectToDB, closeDbConnection } = require("../../dbconfig");

describe("GET /hero_main", () => {
  beforeAll(async () => await connectToDB());

  beforeEach(async () => await ArticleModel.deleteMany());

  afterAll(async () => await closeDbConnection());

  it("should return 1 article in Cloud & Infrastructure (Azure) category", async () => {
    await ArticleModel.create({
      tittle: "Latest Article",
      content: "Sample content",
      category: "Cloud & Infrastructure (Azure)",
      cover: "test-image.webp",
      createdAt: new Date("2025-01-01"),
    });

    await ArticleModel.create({
      tittle: `Article`,
      content: "Sample content",
      category: "Cloud & Infrastructure (Azure)",
      cover: "test-image.webp",
      createdAt: new Date("2024-01-01"),
    });

    const response = await request(app).get("/hero_main");

    expect(response.status).toBe(200);

    expect(response.body).toMatchObject({ tittle: "Latest Article" });
  });
});
