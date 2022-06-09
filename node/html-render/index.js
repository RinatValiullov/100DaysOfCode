let path = require("path");
let express = require("express");
let exphbs = require("express-handlebars");

let app = express();

app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts")
  })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  response.render("home", {
    name: "4rontender",
    languages: ["JavaScript", "PHP", "Python"]
  });
});

const PORT = process.env.PORT || 4327;

app.listen(PORT, () => console.log(`Server is running on ${PORT} port...`));
