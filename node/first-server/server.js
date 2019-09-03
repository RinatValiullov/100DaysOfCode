let http = require('http');
let port = 4327;

let requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello, NODE.JS server');
};

let server = http.createServer(requestHandler);

server.listen(port, (error) => {
  if(error) {
    return console.log('something went wrong', error);
  }
  console.log(`server is listening on ${port}`);
})
