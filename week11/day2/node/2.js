// 提供一个求平均数的函数
let obj = require('./1.js');
let $ = require('jquery123');
console.log($)
// var qqq = 123;
function ave(...arg) {//reduce
    return eval(arg.join('+'))/arg.length
}
module.exports = {
    ave:ave,
    sum:obj.sum
}

/* 
    node 的模块分为三类
    自定义模块   引入时需要加上 路径  require('./1.js)
    第三方模块   通过 npm 下载下来的；  require('jquery')
    内置模块     node自带的一些模块   require('path')
*/