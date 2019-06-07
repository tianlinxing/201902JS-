// 一个请求列表数据的接口   /api/list
// 一个删除数据的接口       /api/del
// 一个添加数据的接口       /api/add

// fs http  url path


let fs = require('fs');
let http = require('http');
let url = require('url');

http.createServer(function(req,res){
    //req.url  可以知道请求的路径
    // console.log(req.url)
    // 因为前端过来的路径有可能带参数，这时 需要后台把参数接出来，根据路径来判断前端要干什么
    let {pathname,query} = url.parse(req.url,true);
    res.setHeader('access-control-allow-origin', '*');//支持跨域
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    // res.statusCode = 500; // 设置http状态码 不设置的时候 若是成功请求，默认200 
    // res.statusMessage = 'hello';// 设置http状态码对应的信息

    let obj = {
        errorCode:0
    }
    switch (pathname) {
        case '/api/list':
            // 若是这个路径 则代表前端想要请求列表数据
            fs.readFile('./data.json','utf-8',(err,data)=>{
                if(!err){
                    obj.data = JSON.parse(data)
                    res.end(JSON.stringify(obj));
                    return;
                }
                res.end('error')
            })
            break;
    
        default:
            break;
    }
    // res.end('hello')

}).listen('9000',function(){
    console.log('服务起于9000端口')
})