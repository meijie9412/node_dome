/*
 * @Descripttion: 文件操作
 * @Author: meijie
 * @Date: 2019-10-14 11:11:37
 * @LastEditors: meijie
 * @LastEditTime: 2019-10-14 13:46:23
 */
const fs = require('fs');
const path = require('path');
const fsPath = (pathName) => {
  return path.resolve(__dirname, pathName);
}
// 读取文件
// fs.readFile(fsPath('book.txt'), 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// 打开文件
// fs.open(fsPath('book.txt'), 'r+', (err, fd) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('打开成功:'+fd);
//   }
// })

// read 读取文件


// 获取文件信息
// fs.stat(fsPath('book.txt'), (err, stats) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(stats);
//   }
// })