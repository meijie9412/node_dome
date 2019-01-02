const crypto = require('crypto');

const md5 = crypto.createHash('sha1');

md5.update('hello');

console.log(md5.digest('hex'));