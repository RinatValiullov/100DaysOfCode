const express = require("express");
const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 4327;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", (req, res) => {
  res.send("hi");
});

app.listen(PORT, console.log(`Server is running on ${PORT} port...`));
