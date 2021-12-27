const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();

const PORT = 4327;

app.get("/", (req, res) => {
  const pathToIndexFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromIndexFile = fs.readFileSync(pathToIndexFile, "utf-8");
  res.send(contentFromIndexFile);
  console.log(pathToIndexFile);
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}...`);
});
