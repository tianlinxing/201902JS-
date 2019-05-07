// 获取元素
let $btn = $('.music_icon'),
    $contentBox = $('.content_box'),
    $footerBox = $('.footer_box'),
    $lyric_box  =$('.lyric_box'),
    $audio = $('#audio'),
    $currentBox = $('.currentT'),
    $bar = $('.progressInner'),
    $endBox = $('.endT');

let isRunning = false;// 判断按钮是否在旋转
$btn.on('touchend',function(){
    // 用什么依据判断 是否在转
    if(isRunning){
        // 点击时 若按钮在旋转；则让他停止
        $(this).css({animationPlayState:'paused'});
        isRunning = false;
        $audio[0].pause();
        clearInterval(timer)
    }else{
        $(this).css({animationPlayState:'running'});
        isRunning = true;
        $audio[0].play();
        setTime()
    }
})

// 当音频可以播放的时候 会触发该函数 
$audio[0].addEventListener('canplay',function(){
    let str = dealTime(this.duration);
    $endBox.html(str)
})

// 初始化歌词部分的高度
function initHeight() {
    // 用底部和到body的距离  -  歌词盒子到body的距离 就是歌词盒子的高度
    let h = $footerBox.offset().top - $contentBox.offset().top;
    $contentBox.css({height:h});
}
initHeight();

// 获取歌词
function getLyric() {
    let p = new Promise(function(res,rej){
        $.ajax({
            url:'./data.json',
            type:'get',
            success:function (data) {
                // 成功获取的数据
                res(data)
            },
            error:function (err) {
                // err 是失败的信息
                rej(err)
            }
        })
    });
    // p 是Promise的实例
    return p;
}

getLyric().then(function (data) {
    dealLyric(data)
},function(){})


//处理歌词
function dealLyric(data) {
    console.log(data)
    let str = data.lyric;
    //[00:00.00]There's a girl but I let her get away[00:09...
    let reg = /\[(\d{2})\:(\d{2})\.\d+\]([^\[]+)/g;
    //

    let htmlStr = '';
    str.replace(reg,function(q,m,s,lyric){
        // 只要字符串中 有符合正则的  就会执行replace的回调函数
        // console.log(arguments)
        //  目的是吧 获取到时间和歌词 展示到页面上
        htmlStr += `<p m='${m}' s='${s}'>${lyric}</p>`
    })
    $lyric_box.html(htmlStr)
}

// 处理音乐播放进度条
// 用 currentTime 和  duration 做处理
// 把时间处理成 00:00的格式；
// 进度条的宽度是由 currentTime/duration 来决定的；

function dealTime(num) {
    let m = parseInt(num/60);// 分钟数
    let s = parseInt(num - m * 60);// 秒数
    m = m < 10 ? '0'+m : m;// m 若小于10 就会补0；
    s = s < 10 ? '0'+s : s;
    return m+':'+s;
}
// dealTime(9)// 00:09

// 设置 播放时间和进度条
let timer = null;
function setTime() {
    timer = setInterval(()=>{
        // 当前的播放时间按
        console.log(1111)
        let ct = $audio[0].currentTime,
            dt = $audio[0].duration;
        $currentBox.html(dealTime(ct));
        $bar.css({
            width:ct/dt*100+'%'
        });
        matchLyric();// 匹配歌词
        if($audio[0].ended){
            // 若是true  说明结束
            clearInterval(timer);// 清除定时器
            // 还需要控制一下按钮 走成停止状态即可
            isRunning = false;
            $btn.css({animationPlayState:'paused'});// 让按钮的旋转状态停止
        }
    },500)
}

// 匹配歌词
function matchLyric() {
    // 需要用当前播放时间 来匹配对应的歌词；
    let ct = $audio[0].currentTime;
    let ary = dealTime(ct).split(':');
    // dealTime(ct)  00:23 -->  ['00','23']
    let $p = $lyric_box.find('p');// 获取到了所有的歌词
    //从所有的 p 中 筛选出符合条件（符合m 和  s）的 p;
    // 给这个p 加上类名；他的兄弟移除类名
    //$p.filter('.select') 从所有 p 中筛选出带有 select类名的p
    let curEle = $p.filter(`[m='${ary[0]}']`).filter(`[s='${ary[1]}']`);
    console.log(curEle);
    // 从所有的P中筛选出 m是 ary[0] 并且s 是ary[1] 的 p 标签
    // 把当前的p加上 active类名 兄弟们移除类名；在这之前 curEle有可能是空
    // 若是空 则不用进类名的操作
    if(!curEle.length)return;
    
    // 若两个定时器内唱的是同一句歌词；不再执行下边函数
    if(curEle.hasClass('active'))return;

    // $('.active') //需要移上去的那一行
    moveLyric();
    curEle.addClass('active').siblings().removeClass('active');

}


// 移动歌词的思路；
// 改变 歌词盒子的top 或 translateY;  每次改变的值是当前歌词的高度
let translateY = 0;
let index = 0;// 控制唱到第几句上移的
function moveLyric(){
    index++;
    if(index < 3)return;
    let t = $('.active').offset().height;// 要移动的哪一行的高度
    translateY += t;// 每次上移都需要在原来的基础上接着上移
    $lyric_box.css({transform:`translateY(${-translateY}px)`});
}




















// getLyric().then((data)=>{
//     console.log(data);
//     return 123;
// },(data)=>{
//     console.log(data);
//     console.log(data1)
// }).then((data)=>{
//     // 第二个then 中函数的参数 是 由第一个then的回调函数的return值决定的
//     // 第二个then 中的两个回调函数 是针对第一个then 中函数执行的结果来说的
//     console.log(data)
// },(data)=>{
//     console.log(123456)
// })







