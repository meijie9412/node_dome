const http = require('http');

var server = http.createServer((request,response)=>{
    console.log(request.method+':'+request.url);
    response.writeHead(200,{'content-type':'text/html'});
    response.end('<h1>node.js</h1>');
})

server.listen(8080);

// const url = require('url');

// console.log(url.parse('https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345015296018cac40c198b543fead5c549865b9bd4a000'))

// const path = require('path');

// const workDir = path.resolve('.');//__dirname

// const filePath = path.join(workDir,'pub','index.html');

// console.log(filePath)
