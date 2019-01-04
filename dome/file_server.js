const 
fs = require('fs'),
url = require('url'),
http = require('http'),
path = require('path');

//从命令行中获取root目录 ，默认是当前目录
const root = path.resolve(process.argv[2] || '.');

const server = http.createServer((request,response)=>{
    const pathName = url.parse(request.url).pathname;
    const filePath = path.join(root,pathName);
    //获取文件状态
    fs.stat(filePath,(err,stats)=>{
        if(!err&&stats.isFile()){
            //没有出错，且是文件
            console.log('200:'+request.url);
            response.writeHead(200);
            //导入文件流
            fs.createReadStream(filePath).pipe(response);
        }else{
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
})

server.listen(8080);

console.log('Server is running at http://localhost:8080/')