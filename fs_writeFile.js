const fs = require('fs');
const txtData = "杨思琪和梅杰";

fs.writeFile('test.txt',txtData,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('ok');
    }
})
//fs 写文件