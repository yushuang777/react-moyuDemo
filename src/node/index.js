const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) console.log(err);
      else res.end(data.toString());
    });
  } else {
    res.end('<h1>404</h1>');
  }
});

server.listen(8080, () => {
  console.log('web服务已启动');
});
