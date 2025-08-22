require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./dbconfig");
const path = require("path");
const articleApi = require("./routes/article");
const topPick = require("./routes/topPicks");
const heroMainSectionPick = require("./routes/mainHeroSec");
const heroDockerSec = require("./routes/heroDockerSec");
const cicdPipelines = require("./routes/cicdPipelines");
const commentsAPI = require("./routes/comment");

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());
app.use(express.json());
app.use("/article", articleApi);
app.use("/top_pick", topPick);
app.use("/hero_main", heroMainSectionPick);
app.use("/hero_docker", heroDockerSec);
app.use("/cicd", cicdPipelines);
app.use("/comment", commentsAPI);

connectToDB();

const port = process.env.ARTICLE_MS_PORT;

app.listen(port, () => console.log(`article-ms listening on port ${port}`));

module.exports = app;
