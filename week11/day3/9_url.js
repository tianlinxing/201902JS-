let url = require('url');

let str = '/d/fdg/df?a=12&b=13';
// /([^?=&]+)=([^?=&]+)/g
let reg = /([^?=&]+)=([^?=&]+)/g;
// str.match(reg)
// reg.exec(str)
let obj = {}
str.replace(reg,function(a,b,c){
    console.log(arguments)
    obj[b]=c;
})
// url 模块是专门用来解析路径的；
let obj2 = url.parse(str,true);// 第二个参数 true 是把query解析成对象
console.log(obj2) // query  pathname  search 
