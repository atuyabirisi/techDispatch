const logger = require("./logger");

module.exports = (error, _req, res, _next) => {
  logger.error(error.message, { metadata: error });

  res.status(500).send("Something went wrong");
};
