let express = require('express');
let app = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders);
  next();
});

app.use((req, res, next) => {
  req.chance = Math.random();
  next();
});

app.use('/', (req, res) => {
  res.json({
    chance: req.chance
  });
});

app.listen(4327);