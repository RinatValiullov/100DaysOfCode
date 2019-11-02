import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Babel and Node!\n');
}).listen(4327, 'localhost');

console.log(`Server running at http://localhost:4327`)

export default server;
