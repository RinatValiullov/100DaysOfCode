require("dotenv").config();
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const File = require("./models/File");

const app = express();

const upload = multer({ dest: "uploads" });

mongoose.connect(process.env.DB_URL);

app.set("view engine", "ejs");

const PORT = process.env.PORT || 4327;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname
  };
  if (req.body.password !== null && req.body.password !== "") {
    fileData.password = await bcrypt.hash(req.body.password, 10);
  }

  const file = await File.create(fileData);
  console.log(file);
  res.send(file.originalName);
});

app.listen(PORT, console.log(`Server is running on ${PORT} port...`));
