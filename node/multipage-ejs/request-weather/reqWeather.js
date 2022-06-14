const axios = require("axios");
require("dotenv").config();

async function getWeather(city = "") {
  if (!city) {
    throw new Error("You must enter the city");
  }

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`;

  try {
    const data = await axios(URL);

    const {
      name: cityName,
      main: { temp: cityImperialTemperature },
      weather: [{ description: cityDescription }]
    } = data.data;

    const cityTemperature = ((cityImperialTemperature - 32) * 5) / 9;

    return {
      cityName,
      cityTemperature: `${cityTemperature.toFixed(0)}`,
      cityDescription,
      error: null
    };
  } catch (error) {
    console.error(error.message);
    return {
      cityname: null,
      cutyTemperature: null,
      cityDescription: null,
      error: error.message
    };
  }
}

module.exports = getWeather;
