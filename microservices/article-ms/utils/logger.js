const winston = require("winston");
const { combine, timestamp, label, prettyPrint } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(label({ label: "article-ms" }), timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({
      filename: "article-ms.log",
      level: "info",
    }),
  ],
});

module.exports = logger;
