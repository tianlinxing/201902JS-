let http = require('http');
let fs = require('fs');
function read(url,cb){
    // cb 是自己定义的回调函数，只有当读取文件成功的时候才会执行
    // 并且把 读取到的数据传给 cb;
    fs.readFile(url,(err,data)=>{
        if(err){
            console.log('读取失败');
            return
        }
        cb(data)
    })
}
let  p = http.createServer(function(req,res){
    // req.headers // 获取请求头
    res.setHeader("content-type",'image/jpg;charset=UTF-8') // 设置响应头
    // 告诉浏览器 返回的是一张图片
    read('./img/1.jpg',(data)=>{
        //data 就是读取到的文件  箭头函数是对应上边的 cb
        console.log(data)
        res.end(data)// 读取成功之后 再去执行  end 函数；
    })
    // res.end('hello')
})
p.listen('8080',function(){
    console.log('服务起于8080端口')
})