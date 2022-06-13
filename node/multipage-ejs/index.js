const express = require("express");
const bodyParser = require("body-parser");
const getWeather = require("./request-weather/reqWeather");

const PORT = process.env.PORT || 4327;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Index page
app.get("/", (req, res) => {
  res.render("pages/index", {
    cityName: null,
    cityTemperature: null,
    cityDescription: null,
    error: null
  });
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.post("/", async (req, res) => {
  const { city } = req.body;

  const { cityName, cityTemperature, cityDescription, error } =
    await getWeather(city);

  res.render("pages/index", {
    cityName,
    cityTemperature,
    cityDescription,
    error
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} port...`));
