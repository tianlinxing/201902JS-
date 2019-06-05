let fs = require('fs');
let http = require('http');
http.createServer(function(req,res){
    fs.readFile('./src/my.html','utf-8',(err,data)=>{
        if(!err){
            res.end(data)
        }
        res.end('失败')
    })
}).listen('8081',function(){
    console.log('服务成功 8081')
})