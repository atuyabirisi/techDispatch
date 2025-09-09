const { verify } = require("jsonwebtoken");
const logger = require("../utils/logger");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token)
    return res.status(401).json({ message: "Access denied.No token provided" });

  try {
    const decodedPayload = verify(token, process.env.JWT_SECRET);

    req.user = decodedPayload;

    next();
  } catch (error) {
    logger.error(error.message, { metadata: error });
    res.status(400).json({ message: "Invalid token" });
  }
};
