const express = require("express");
const path = require("path");

const startBot = require("../allProjects/WaterBot/bot");
const app = express();

const blanchPath = path.resolve(__dirname, "../allProjects/Blanchard");
const prototest = path.resolve(__dirname, "../allProjects/prototypeTest");
const mainLandPath = path.resolve(__dirname, "../client/dist");

app.use(express.static(mainLandPath));
app.use(express.static(blanchPath));
app.use(express.static(prototest));

app.get("/blanchard", function (req, res) {
  const indexPath = path.resolve(blanchPath, "index.html");
  res.sendFile(indexPath);
});

app.get("/prototest", function (req, res) {
  const indexPath = path.resolve(prototest, "index.html");
  res.sendFile(indexPath);
});

app.get("/*", function (req, res) {
  const indexPath = path.resolve(mainLandPath, "index.html");
  res.sendFile(indexPath);
});

app.listen(3000, "127.0.0.1", () => {
  startBot();
  console.log("start");
});
