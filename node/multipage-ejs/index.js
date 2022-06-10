const express = require("express");

const PORT = process.env.PORT || 4327;
const app = express();

app.set("view engine", "ejs");

// Index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port...`));
