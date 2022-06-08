const axios = require("axios");
require("dotenv").config();

module.exports = async function (city = "") {
  if (!city) {
    throw new Error("You must enter the city name");
  }

  const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`;

  try {
    const data = await axios.get(URL_API);
    const temperature = ((data.data.main.temp - 32) * 5) / 9;

    return {
      weather: `${data.data.name}: ${temperature.toFixed(0)}`,
      error: null
    };
  } catch (error) {
    return {
      weather: null,
      error: error.message
    };
  }
};
