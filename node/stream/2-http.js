// http server that uses a through stream to write back the request stream as upper-cased response data for POST requests.
const http = require('http');
const through = require('through2');

const server = http.createServer(function (req, res) {
  
  if (req.method === 'POST') {
   req.pipe(through(function (buf, _, next) {

    this.push(buf.toString().toUpperCase());
    next();

  })).pipe(res);

 }

 else res.end('send me a POST\n');

});

server.listen(parseInt(3001));