const express = require("express");
const app = express();

const PORT = process.env.PORT || 4327;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { nickname: "4rontender" });
});

app.listen(PORT, () => console.log(`Server is runing on ${PORT} port...`));
