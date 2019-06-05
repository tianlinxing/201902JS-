// 需要判断路径了  req.url
let fs = require('fs')
let http = require('http');

http.createServer(function (req,res) {
    // 只要响应 就执行
    // fs.readFile('./src/my.html',(err,data)=>{
    //     // 不管什么请求  返回值都是 该html文件
    //     // 正常应该是 请求什么给什么；
    //     console.log(666)
    //     res.end(data)// 
    // })
    // res.end();
    // end执行过之后 就不会再去执行了
    // 异步的end再执行也没用了；因为 前端接受到响应之后就回去了
    // console.log(req.url);
    // res.end()

    // 若请求路径是个 / 或者 /index.html  都返回 my.html
    switch (req.url) {
        case '/':
        case '/index.html':
            fs.readFile('./src/my.html',(err,data)=>{
                res.end(data);
            })
            break;
        case '/1.js':
            fs.readFile('./src/1.js',(err,data)=>{
                res.end(data)
            }) 
            break;
        case '/1.css':
            fs.readFile('./src/1.css',(err,data)=>{
                res.end(data)
            })   
            break; 
        case '/img/1.jpg':
            fs.readFile('./img/1.jpg',(err,data)=>{
                res.end(data)
            })   
            break;         
        default:
            // 非法路径 统一走404页；
            res.end('404')
            break;
    }
}).listen('8082',function(){
    console.log(8082)
})