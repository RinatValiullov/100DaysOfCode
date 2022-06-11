const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4327;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.post("/", (req, res) => {
  const { city } = req.body;

  console.log(city);

  res.render("pages/index");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port...`));
