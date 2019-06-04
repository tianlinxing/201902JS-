// 在这个JS文件中使用  求和 和 求平均函数

// let utils = require('./1.js');
let tools = require('./2.js');
// console.log(utils.sum(1,2));
console.log(tools.sum(1,2));
console.log(tools.ave(2,3,4,5,6));

// 每一个文件都是一个单独的作用域
global.process.env.base_url = '/hello'
// console.log(global.process.env) //  全局变量是  global;不是window
console.log(__dirname); // 当前文件所在文件夹的绝对路径
console.log(__filename); // 当前文件的绝对路径

/*
// node 处理JS文件时， 我们把每个JS文件理解成一个大的自执行函数即可
(function(__dirname,__filename,exports,module,require){
    // 在这个JS文件中使用  求和 和 求平均函数

    // let utils = require('./1.js');
    let tools = require('./2.js');
    // console.log(utils.sum(1,2));
    console.log(tools.sum(1,2));
    console.log(tools.ave(2,3,4,5,6));

    // 每一个文件都是一个单独的作用域
    global.process.env.base_url = '/hello'
    console.log(global.process.env) //  全局变量是  global;不是window

})()
*/