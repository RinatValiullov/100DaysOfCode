const http = require('http');
const url = require('url');
const namor = require('namor');

const server = http.createServer((req, res) => {
  const { query } = url.parse(req.url, true);

  let payload = Array.from({ length: 5 });

  for (let item in payload) {
    payload[item] = {
      generated_name: namor.generate({ words: 3, numbers: 0 })
    };
  }

  payload = JSON.stringify(payload, null, 2);

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', Buffer.byteLength(payload));
  res.end(payload, () => console.log(Buffer));
});

const port = process.env.PORT || 4327;
const host = process.env.HOST || '127.0.0.1';

server.listen(port, host, arg => {
  console.log(`=> running at http://${host}:${port}`);
});
