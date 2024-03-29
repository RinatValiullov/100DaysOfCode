const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();

const PORT = 4327;

app.get("/hello/", (req, res) => {
  const pathToIndexFile = path.resolve(__dirname, "../dist/hello.html");
  const contentFromIndexFile = fs.readFileSync(pathToIndexFile, "utf-8");
  res.send(contentFromIndexFile);
  console.log(pathToIndexFile);
});

app.get("/adrian/", (req, res) => {
  const pathToIndexFile = path.resolve(__dirname, "../dist/adrian.html");
  const contentFromIndexFile = fs.readFileSync(pathToIndexFile, "utf-8");
  res.send(contentFromIndexFile);
  console.log(pathToIndexFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}...`);
});
