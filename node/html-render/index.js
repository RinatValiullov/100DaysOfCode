let path = require('path');
let express = require('express');
let exphbs = require('express-handlebars');
let app = express();

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.listen(4327);

app.get('/', (request, response) => {
  response.render('home', {
    name: '4rontender'
  });
});