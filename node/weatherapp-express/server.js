const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 4327;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const { city } = req.body;

  console.log(city);

  res.render("index");
});

app.listen(PORT, () => console.log(`Server is runing on ${PORT} port...`));
