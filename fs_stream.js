const fs = require('fs');
const writeStream = fs.createWriteStream('test.txt','utf-8');
const readStream = fs.createReadStream('test.txt','utf-8');
const readStream2 = fs.createReadStream('test2.txt','utf-8');



readStream.on('data',(chunk)=>{
    console.log('data:'+chunk);
})

readStream.on('end',()=>{
    console.log('end');
})

readStream.on('err',(err)=>{
    console.log(err)
})

// readStream2.pipe(writeStream)

writeStream.write('梅小小');
writeStream.write('123');
writeStream.end();