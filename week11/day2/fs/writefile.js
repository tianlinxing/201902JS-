let fs = require('fs');

// 这也是一个异步函数 在node中 不带sync的事件 基本都是异步事件
fs.writeFile('./test/1.txt','hello','utf-8',(err)=>{
    // 第一个参数  是 要写的文件路径，若没有对应的文件，则会自动创造一个
    // 第二个参数  是 要写的内同
    // 第三个参数  是编码格式 utf-8
    // 第四个参数  是一个回调函数，回调函数只有一个形参，参数有值，代表写文件失败
    if(err){
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})

fs.writeFile('./test/1.js','var b = 12;console.log(b)','utf-8',(err)=>{
    if(err){
        console.log('失败');
        return;
    }
    console.log('成功')
})

// let res = fs.writeFileSync('./test/1.txt','你好','utf-8');// res结果是undefined

// 同步异步 不要同时使用；容易出现不可预知的错误