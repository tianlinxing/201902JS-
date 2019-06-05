// 需要判断路径了  req.url
let fs = require('fs')
let http = require('http');

http.createServer(function (req,res) {

    // 若请求路径是个 / 或者 /index.html  都返回 my.html
    let url = req.url == '/' ? '/index.html' : req.url;
    fs.readFile(url,(err,data)=>{
        console.log(req.url)
        if(err){
            console.log(666);
            res.end('error')
            return;
        }
        res.end(data)
    })   
}).listen('8083',function(){
    console.log(8083)
})