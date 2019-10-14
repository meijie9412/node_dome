/*
 * @Descripttion: 拷贝小文件
 * @Author: meijie
 * @Date: 2019-08-09 13:38:51
 * @LastEditors: meijie
 * @LastEditTime: 2019-10-10 14:31:13
 */
const fs = require("fs");
const path = require('path');

function smallCopy(source, output) {
  return new Promise((resolve, reject) => {
    fs.readFile(source, (err, data) => {
      if(err) {
        reject(err)
      }else {
        fs.writeFile(output, data, (err) => {
          if (err) {
            reject(err)
          } else {
            resolve('ok')
          }
        })
      }
    })
  }).catch((err) => console.log(err))
}

(async function  main  () {
  const sourcePath = path.resolve(__dirname,'copy.txt');
  const outputPath = path.resolve(__dirname,'index.txt');
  const result = await smallCopy(sourcePath, outputPath);
  console.log(result);
})()
