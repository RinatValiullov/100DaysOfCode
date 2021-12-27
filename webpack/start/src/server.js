const express = require("express");
const app = express();

const PORT = 4327;

app.get("/", (req, res) => {
  res.send("Server on express framework");
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}...`);
});
