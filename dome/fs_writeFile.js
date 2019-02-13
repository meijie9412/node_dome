// const fs = require('fs');
// const txtData = "杨思琪和梅杰";

// fs.writeFile('test.txt',txtData,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('ok');
//     }
// })
// //fs 写文件

const fs = require('fs');
const textData = '梅杰和杨思琪？';

fs.writeFile(
    './test.txt',
    textData,
    (err) => {
        const val = err ? err : 'ok';
        console.log(val); 
    }
)