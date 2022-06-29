const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({ dest: "uploads" });

app.set("view engine", "ejs");

const PORT = process.env.PORT || 4327;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("hi");
});

app.listen(PORT, console.log(`Server is running on ${PORT} port...`));
