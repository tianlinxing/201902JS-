// express 是 node 的一个封装好的 库 
let express = require('express');
let app = express();

// 中间件 都放在 路径请求的上边
app.use(function (req,res,next) {
    res.setHeader('zf',123);
    req.name = 666;
    next();// 必须的  使用中间件的时候必须使用 next()
})

// 使用express的静态模板
app.use(express.static('./src2'))

app.get('/',function (req,res) {
    // 若是get请求  并且 请求的路径是 / 的 
    // 会触发该回调函数
    console.log("你好");
    console.log(req.name)
    res.send('12345')
})
app.post('/qqq',function (req,res) {
    // 若是 post请求 并且路径是 /list 的
    // 会触发该回调函数  
    res.send('您好')
})

app.all('*',function (req,res) {
    // 所有类型的请求  所有没有被匹配的路径  都会遭到函数；
    res.send('404')
})

app.listen('8000',function(){
    console.log('服务起于 8000')
})