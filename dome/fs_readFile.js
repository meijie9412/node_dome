const fs = require('fs');

fs.readFile('test.txt','utf-8',(data,err)=>{
    if(data){
        console.log(data);
    }else{
        console.log(err)
    }
})

//fs 读文件