/*
 * @Descripttion: 拷贝大文件
 * @Author: meijie
 * @Date: 2019-10-10 14:51:50
 * @LastEditors: meijie
 * @LastEditTime: 2019-10-10 17:12:54
 */
const fs = require('fs');
const path = require('path');
(function main () {
  const copyPath = path.resolve(__dirname, 'copy.pdf');
  const outputPath = path.resolve(__dirname, 'output.pdf');
  const readStream = fs.createReadStream(copyPath);
  const writeStream = fs.createWriteStream(outputPath);
  readStream.pipe(writeStream);
  readStream.on('end', () => {
    console.log('读取完成')
  })
  readStream.on('error', (err) => {
    console.log('读取错误'+ err)
  })
  writeStream.on('finish', () => {
    console.log('写入完成')
  })
  writeStream.on('error', (err) => {
    console.log('写入错误'+err)
  })
  console.log('ok')
})()


