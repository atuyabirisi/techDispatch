const axios = require("axios");
const User = require("../../models/UserModel");
const { connectDB, closeDbConnection } = require("../../dbconfig");
require("dotenv").config({ path: ".env.test" });

describe("Auth service - signup endpoint", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await User.deleteMany({});

    await closeDbConnection();
  });

  it("should signup a user and return their 201 status code", async () => {
    const response = await axios.post("http://localhost:3001/signup", {
      email: "test@gmail.com",
      username: "test",
      password: "test123",
      confirmPassword: "test123",
    });

    expect(response.status).toBe(201);
  });

  it("should fail if the user is already registered", async () => {
    try {
      await axios.post("http://localhost:3001/signup", {
        email: "test@gmail.com",
        username: "test",
        password: "test123",
        confirmPassword: "test123",
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toBe("User already registered");
    }
  });
});
