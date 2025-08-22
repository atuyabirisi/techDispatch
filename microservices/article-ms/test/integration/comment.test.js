const request = require("supertest");
const app = require("../../index");
const CommentModel = require("../../models/commentModel");
const { connectToDB, closeDbConnection } = require("../../dbconfig");

describe("/comment", () => {
  beforeAll(async () => await connectToDB());

  beforeEach(async () => await CommentModel.deleteMany({}));

  afterAll(async () => await closeDbConnection());

  afterEach(() => jest.restoreAllMocks());

  describe("POST /comment", () => {
    it("should successfully store a comment made on an article", async () => {
      const response = await request(app).post("/comment").send({
        article: "article-123",
        comment: "This is a test comment",
        commenter: "user1",
      });

      expect(response.status).toBe(200);

      expect(response.text).toContain("comment posted successfully");

      const savedComment = await CommentModel.findOne({
        comment: "This is a test comment",
      });

      expect(savedComment).not.toBeNull();

      expect(savedComment.article).toBe("article-123");
    });
  });

  describe("GET /comment", () => {
    it("should return 400 if x-active-story-id header is missing", async () => {
      const res = await request(app).get("/comment");

      expect(res.status).toBe(400);

      expect(res.body).toEqual({ error: "Missing x-active-story-id header" });
    });

    it("should return filtered comments for a valid x-active-story-id", async () => {
      const mockComments = [
        { article: "123", comment: "Great post!", commenter: "Alice" },
        { article: "456", comment: "Nice read", commenter: "plp" },
        { article: "123", comment: "Interesting", commenter: "atuya" },
      ];

      jest.spyOn(CommentModel, "find").mockResolvedValue(mockComments);

      const res = await request(app)
        .get("/comment")
        .set("x-active-story-id", "123");

      expect(res.status).toBe(200);

      expect(res.body).toEqual([
        { article: "123", comment: "Great post!", commenter: "Alice" },
        { article: "123", comment: "Interesting", commenter: "atuya" },
      ]);
    });
  });
});
