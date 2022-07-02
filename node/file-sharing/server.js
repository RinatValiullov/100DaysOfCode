require("dotenv").config();
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const File = require("./models/File");

const app = express();
app.use(express.static(__dirname + "/styles"));
app.use(express.urlencoded({ extended: true }));

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

  res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
});

// app.get("/file/:id", handleDownload);
// app.post("/file/:id", handleDownload);

// The same as above lines: 38, 39
app.route("/file/:id").get(handleDownload).post(handleDownload);

async function handleDownload(req, res) {
  const file = await File.findById(req.params.id);

  if (file.password != null) {
    if (req.body.password == null) {
      res.render("password");
      return;
    }

    // Be careful with strict and loose comparing: lines 47 and 48.
    // "req.body.password" is just a string. But "file.password" is a hash string.
    if (!(await bcrypt.compare(req.body.password, file.password))) {
      res.render("password", { error: true });
      return;
    }
  }

  file.downloadCount++;
  await file.save();
  console.log(file.path);

  res.download(file.path, file.originalName);
}

app.listen(PORT, console.log(`Server is running on ${PORT} port...`));
