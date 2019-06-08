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
    
    // 前端请过来之后， 后端都会做一次判断， 判断这个人是否还在和登陆阶段，
    // 一般是通过cookie中 后端种植的某个字段来判断的；若还是合法登陆的情况下
    // 就接着向下请求数据； 若不合法 直接 返回失败态；

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
        case '/api/login':
            if(query.psd == '666'){
                // 我们自己规定的  密码是666的  就是成功
                // 否则就是失败； 这些只是为了我们自己好调试做的判断， 实际工作不会有
                res.setHeader('Set-Cookie','token='+Date.now()+';path=/');//给前端种植cookie
                obj.success = 'success';
                res.end(JSON.stringify(obj))
            }else{
                obj.errorCode = 1;
                obj.errorMsg = 'noLogin';
                res.end(JSON.stringify(obj))
            }
            break;  
        case '/api/del':
            // 执行删除的时候 前端传给了我们一个 id;通过query获取
            // 先读取data.json  然后 删除； 删除之后再去写入
            fs.readFile('./data.json','utf-8',(err,data)=>{
                if(err){
                    // 读取失败
                    res.end('error');
                    return
                }
                // data 是一个字符串
                let ary = JSON.parse(data);
                let tempAry = ary.filter(item=>item.id != query.id);
                // tempAry 就是删除之后的数组
                fs.writeFile('./data.json',JSON.stringify(tempAry),'utf-8',(err)=>{
                    if(err){
                        res.end('error')
                        return
                    }
                    res.end(JSON.stringify(obj))// 后台删除成功，才能告诉前端 成功删除
                })
            })
            break;  
        case '/api/add':
            // 执行 添加或者修改的动作  
            // 添加 前端没有传递id 就是 添加
            // 修改 前端传递带有id 就是 修改   
            // 怎么获取传递传递的数据？ post
            let dataStr = '';
            req.on('data',function(str){
                // post传递数据，是分成一段一段的数据传递，这时会触发该函数
                dataStr += str;
            })     
            req.on('end',function () {
                //dataStr.toString() 获取到的是前端给的JSON字符串
                let reqData = JSON.parse(dataStr.toString());
                // reqData 就是前端给的对象；
                // 根据 reqData 是否有ID 来判断 要干的事；
                // 没ID 后端添加ID 然后把数据放到 data.json中
                if(reqData.id === undefined){
                    // 不存在ID就是添加
                    reqData.id = Math.random();
                    fs.readFile('./data.json','utf-8',(err,data)=>{
                        if(err){
                            obj.errorCode = 5;// 后端操作失败
                            res.end(JSON.stringify(obj));
                            return;
                        }
                        let tempAry = JSON.parse(data);
                        tempAry.unshift(reqData);// 把前端给的数据 放到JSON文件中；
                        // 把修改后的数组写入文件
                        fs.writeFile('./data.json',JSON.stringify(tempAry),'utf-8',(err)=>{
                            if(err){
                                obj.errorCode = 5;// 后端操作失败
                                res.end(JSON.stringify(obj));
                                return;
                            }
                            res.end(JSON.stringify(obj));// 成功 直接返回一个 errorCode:0 即可
                        })
                    })
                }else{
                    // 有ID  就是修改数据
                    fs.readFile('./data.json','utf-8',(err,data)=>{
                        if(err){
                            res.end('error');
                            return;
                        }
                        let tempAry = JSON.parse(data);
                        // 找到对应ID的那条数据 然后修改
                        // reqData.id
                        tempAry = tempAry.map(item => {
                            if(item.id == reqData.id){
                                // id若想等  就返回期端传过来的数据
                                // 否则返回原数组的值
                                return reqData;
                            }
                            return item;
                        });
                        fs.writeFile('./data.json',JSON.stringify(tempAry),'utf-8',(err)=>{
                            if(err){
                                res.end('error')
                                return 
                            }
                            res.end(JSON.stringify(obj))// 改写成功返回 errorCode :0
                        })

                    })
                }
                console.log(dataStr.toString());
                // res.end('666')
            })
            break;
        default:
            // 上边的路径都不满足的情况下 我们反给前端404错误
            res.statusCode = 404;
            res.end()
            break;
    }
    // res.end('hello')

}).listen('9000',function(){
    console.log('服务起于9000端口')
})