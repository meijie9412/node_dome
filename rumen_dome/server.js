const http = require('http');

http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>nodejs hello</h1>');
    response.end();
}).listen(8080);
console.log('服务已启动');
