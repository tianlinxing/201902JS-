let fs = require('fs');

// 异步 读取文件
// 路径     编码格式    回调函数； 比writeFile 少了一个写入的内容
fs.readFile('../1_git.html', 'utf-8', (err, data) => {
    // data 就是我们读取到的内容；
    if (err) {
        console.log('读取失败',err);
        return
    }
    console.log('读取成功')
    console.log(data);
    // 把读到的内容 写入到test文件夹中的一个 2.html 中；
    fs.writeFile('./test/2.html',data,'utf-8',(err)=>{
        if(err){
            console.log('写入失败')
            return 
        }
        console.log('写入成功')
    })
})

let res = fs.readFileSync('./1.js','utf-8');
fs.writeFileSync('./test/1.js',res,'utf-8');

// 把 test 中的文件 写一份放到 test2 中；
// 先读文件夹readdir  ['1.js','1.txt','2.html']
// 根据读取到的内容  按照顺序读取对应文件readFile 
// 读取成功 在 执行写入(writeFile)的 动作；

fs.readdir('./test',(err,data)=>{
    // data 数组列表
    if(err){
        console.log('error')
        return
    }
    data.forEach(item=>{
        fs.readFile(`./test/${item}`,'utf-8',(err,res)=>{
            if(err){
                console.log('error')
                return
            }
            fs.writeFile(`./test2/${item}`,res,'utf-8',(err)=>{
                if(err){
                    console.log('error')
                    return
                }
            })
        })
    })
})