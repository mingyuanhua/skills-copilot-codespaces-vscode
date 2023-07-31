// Create web server

// Run server: node comments.js
// Test: curl -X POST -H "Content-Type: application/json" -d '{"body":"Hello world"}' http://localhost:3000/comments

const http = require('http');
const url = require('url');
const qs = require('querystring');

let comments = [];

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/comments') {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(comments));
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      req.on('end', () => {
        const comment = qs.parse(body);
        comments.push(comment);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comment));
      });
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000);