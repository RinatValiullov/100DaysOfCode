let express = require('express');
let app = express();
let port = 4327;

app.get('/', (request, response) => {
  response.send('Hello, NODE.JS server from EXPRESS');
});

app.listen(port, (error) => {
  if(error) {
    return console.log('something went wrong', error);
  }
  console.log(`server is listening on ${port}`);
})