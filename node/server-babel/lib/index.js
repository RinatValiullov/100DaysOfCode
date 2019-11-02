import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Babel and Node!\n');
}).listen(4327, '127.0.0.1');

console.log(`Server running at http://127.0.0.1:4327/`)

export default server;
