const http = require('http');

http.createServer((request,reponse) => {
    reponse.writeHead(200,{"Content-Type":"text/plan"});
    reponse.end('hello world');
}).listen(8080);
console.log('启动成功！');