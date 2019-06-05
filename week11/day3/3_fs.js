let fs = require('fs');

function mkdir(){
    fs.mkdir('./test',(err)=>{
        if(!err){
            console.log('成功')
            readdir('./test')
        }
    })
}
mkdir();

function readdir(url) {
    fs.readdir(url,(err,data)=>{
        if(!err){
            console.log(data);
        }

    })
}

function readFile(url) {
    fs.readFile(url,'utf-8',(err,data)=>{
        if(err){
            console.log('error')
            return;
        }
        console.log(data)
    })
}

function writeFile(url,data) {
    fs.writeFile(url,data,'utf-8',(err)=>{
        if(err){
            console.log('error')
            return;
        }
        console.log('success')
    })
}
var obj = {name:123}
// writeFile('./test/1.js',JSON.stringify(obj))// 数据默认转成字符串

function append(url,data){
    // 向文件中添加内容,参数跟写文件是一样的
    fs.appendFile(url,data,'utf-8',(err)=>{
        if(err){
            console.log('失败')
            return
        }
        console.log('成功')
    })
}
append('./test/1.txt','hello world');

append('./test/1.txt','hello world')

append('./test/1.txt','hello world')

append('./test/1.txt','hello world')