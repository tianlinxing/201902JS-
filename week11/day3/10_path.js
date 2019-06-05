let path = require('path');

// 当前的绝对路径 拼接 dist 形成一个新的绝对路径
console.log(path.resolve(__dirname,'dist'));
// fs  http  url   path