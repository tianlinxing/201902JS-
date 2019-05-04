let $tab = $('.tab'),
    $tabBody = $('.tab_body');
$tab.on('click',function(e){
    let $target = $(e.target);
    // 下边的代码执行必须保证点击的是 li元素
    // 我们使用标签名 作为判断的依据
    if(e.target.tagName.toUpperCase()!=='LI')return;
    let n = $target.index()
    console.log(n);
    $target.addClass('current').siblings().removeClass('current');
    // $xxx.index() 是获取该元素在父盒子中的索引值
    $tabBody.addClass('hide').eq(n).removeClass('hide');
})

function swiperInit() {
    let swiper = new Swiper('.swiper-container',{
        autoplay:{

        },
        loop:true
    })
}
swiperInit();