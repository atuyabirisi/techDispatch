const { verify } = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied.No token provided");

  try {
    const decodedPayload = verify(token, process.env.JWT_SECRET);

    req.user = decodedPayload;

    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
