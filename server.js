const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'index.html');

  if (req.url === '/djapollo/terms' || req.url === '/djapollo/terms/') {
    filePath = path.join(__dirname, 'djapollo_terms.html');
  } else if (req.url === '/djapollo/privacy' || req.url === '/djapollo/privacy/') {
    filePath = path.join(__dirname, 'djapollo_privacy.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Page not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Techtonomy website running on port ${PORT}`);
});
