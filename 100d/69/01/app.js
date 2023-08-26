const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 42069;
let indexFile;

const requestListener = function(req, res) {
  res.setHeader("Content-type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
}

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
  .then(contents => {
    indexFile = contents;
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}`);
    })
  })
  .catch(err => {
    res.writeHead(500);
    res.end(err);
    return;
  });
