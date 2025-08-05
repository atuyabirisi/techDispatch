const axios = require("axios");
const bcrypt = require("bcrypt");
const User = require("../../models/UserModel");
const { connectDB, closeDbConnection } = require("../../dbconfig");

describe("signin endpoint", () => {
  describe("POST /signin", () => {
    beforeAll(async () => {
      await connectDB();

      await User.deleteMany({});
    });

    afterAll(async () => {
      await User.deleteMany({});

      await closeDbConnection();
    });

    it("should fail if the user is not registered in the database", async () => {
      try {
        await User.findOne({
          email: "notregistred@gmail.com",
        });
      } catch (error) {
        expect(error.response.status).toBe(400);

        expect(error.response.data).toBe("Invalid email or password");
      }
    });

    it("should signin successfully with valid credentials", async () => {
      const salt = await bcrypt.genSalt(10);

      const password = await bcrypt.hash("test123", salt);

      const user = new User({
        email: "test@gmail.com",
        username: "test",
        password: password,
        confirmPassword: password,
      });

      await user.save();

      const response = await axios.post("http://localhost:3001/signin", {
        email: "test@gmail.com",
        password: "test123",
      });

      expect(response.data).toHaveProperty("token");
    });

    it("should fail with invalid signin credentials", async () => {
      try {
        await axios.post("http://localhost:3001/signin", {
          email: "test@gmail.com",
          password: "badpassword",
        });
      } catch (error) {
        expect(error.response.status).toBe(400);

        expect(error.response.data).toBe("Invalid email or password");
      }
    });
  });
});
