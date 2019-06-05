// 需要判断路径了  req.url
let fs = require('fs')
let http = require('http');
let urlObj = require('url')

http.createServer(function (req,res) {
    // console.log(res)
    // 若请求路径是个 / 或者 /index.html  都返回 my.html
    let url = req.url == '/' ? '/index.html' : req.url;
    console.log(url)
    let {pathname,query} = urlObj.parse(url,true)
    fs.readFile('./src2'+pathname,(err,data)=>{
        if(err){
            res.end('error')
            return;
        }
        // 请求路径 是 /1.json时 才需要我们去写入；
        // 读取到的是一个 Buffer类型 需要我们转成  string
        // 要把前端转过来的id 添加到 1.json中；
        if(pathname =='/1.json'){
            let obj = JSON.parse(data.toString()); // 获取到了JSON对象
            obj.id = query.id || 666;
            fs.writeFile('./src2/1.json',JSON.stringify(obj),'utf-8',(err)=>{
                if(!err){
                    res.end(JSON.stringify(obj))
                }
                res.end('失败')
            })
        }else{
            res.end(data)
        }
        // console.log(data.toString());
        
    })   
}).listen('8083',function(){
    console.log(8083)
})