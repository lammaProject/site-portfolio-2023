const express = require("express");
const path = require("path");

const app = express();

const blanchPath = path.resolve(__dirname, "../allProjects/Blanchard");
const mainLandPath = path.resolve(__dirname, "../client/dist");

app.use(express.static(mainLandPath));
app.use(express.static(blanchPath));

app.get("/blanchard", function (req, res) {
  const indexPath = path.resolve(blanchPath, "index.html");
  res.sendFile(indexPath);
});

app.get("/*", function (req, res) {
  const indexPath = path.resolve(mainLandPath, "index.html");
  res.sendFile(indexPath);
});

app.listen(80, () => {
  console.log("start");
});
