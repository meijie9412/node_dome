const fs = require('fs');

fs.stat('test.txt',(err,stat)=>{
    if(err){
        console.log(err);
    }else{
        console.log("是否是文件"+stat.isFile());
        console.log("文件大小"+stat.size);
    }
})