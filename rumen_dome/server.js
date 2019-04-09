const url = require('url');
const http = require('http');

const server = (route) => {
    http.createServer((request,response) => {
        const pathName = url.parse(request.url).pathname;
        console.log(`request for ${pathName} received`);
        route(pathName);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<h1>nodejs hello</h1>');
        response.end();
    }).listen(8080);
    console.log("server has started");
}

module.exports = server;