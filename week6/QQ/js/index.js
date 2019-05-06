// 获取元素
let $btn = $('.music_icon'),
    $contentBox = $('.content_box'),
    $footerBox = $('.footer_box');

let isRunning = false;// 判断按钮是否在旋转
$btn.on('touchend',function(){
    // 用什么依据判断 是否在转
    if(isRunning){
        // 点击时 若按钮在旋转；则让他停止
        $(this).css({animationPlayState:'paused'});
        isRunning = false;
    }else{
        $(this).css({animationPlayState:'running'});
        isRunning = true;
    }
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







