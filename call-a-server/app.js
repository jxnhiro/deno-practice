const http = require("http");

const server = http.createServer((_req, res) => {
  res.end("Hello, world!");
});

server.listen(3000);
