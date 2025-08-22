const request = require("supertest");
const ArticleModel = require("../../models/article");
const { connectToDB, closeDbConnection } = require("../../dbconfig");
const app = require("../../index");

describe("GET /hero_docker", () => {
  beforeAll(async () => await connectToDB());

  beforeEach(async () => await ArticleModel.deleteMany());

  afterAll(async () => await closeDbConnection());

  it("should return 2 articles of Docker & Containerization category", async () => {
    const articles = Array.from({ length: 4 }, (_, i) => ({
      tittle: `Article${i}`,
      content: "Sample content",
      category: "Docker & Containerization",
      cover: "test-image.webp",
    }));

    await ArticleModel.insertMany(articles);

    const response = await request(app).get("/hero_docker");

    expect(response.status).toBe(200);

    expect(response.body.length).toBe(2);
  });
});
