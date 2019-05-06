let $tab = $('.tab'),
    $tabBody = $('.tab_body'),
    $ul1 = $('.tab').eq(1), // 固定的那个 ul
    $ul2 = $('.tab').eq(2); // 悬浮的那个 ul
$tab.on('click', function (e) {
    let $target = $(e.target);
    // 下边的代码执行必须保证点击的是 li元素
    // 我们使用标签名 作为判断的依据
    if (e.target.tagName.toUpperCase() !== 'LI') return;
    let n = $target.index()
    // console.log(n);
    // $target.addClass('current').siblings().removeClass('current');
    // console.log(this);// this 是绑定的点击事件的原生对象
    $ul1.find('li').eq(n).addClass('current').siblings().removeClass('current');
    //  $ul1.find('li') 固定的ul 下的li
    $ul2.find('li').eq(n).addClass('current').siblings().removeClass('current');
    // $ul2.find('li') 悬浮的ul 下的li
    // $xxx.index() 是获取该元素在父盒子中的索引值
    $tabBody.addClass('hide').eq(n).removeClass('hide');
})

function swiperInit() {
    let swiper = new Swiper('.swiper-container', {
        autoplay: {

        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            // currentClass:'current', 修改当前索引的元素类名
            // totalClass:'total' 修改总数的元素类名
        }
    })
}


// 获取banner数据
function getData() {
    $.ajax({
        url: "./data/banner.json",
        type: "get", // 老版是 type;  新版式 methods
        success: function (data) {
            //请求成功之后的回调函数
            console.log(data);
            // 请求成功之后 把数据渲染到页面上
            renderBanner(data);

            // 初始化 swiper时需要保证 banner已经渲染完成
            swiperInit();
        },
        error: function () {
            // 请求失败之后的回调函数
        }
    })
}
getData();

// 把从后台获取到的数据 渲染到页面
function renderBanner(ary) {
    let str = '';
    ary = ary || []; // 容错机制
    ary.forEach(item => {
        let {
            text,
            src,
            href
        } = item;
        str += `<div class="swiper-slide">
                    <img src="${src}" alt="">
                </div>`
    });
    $('.swiper-wrapper').html(str);
    // $('.swiper-wrapper')[0].innerHTML = str;
}


// 请求列表数据
function getList() {
    $.ajax({
        url: './data/list.json',
        type: 'get',
        success: function (data) {
            console.log(data);
            renderList(data);
        },
        error: function () {

        }
    })
}
getList();

function renderList(ary) {
    // debugger;
    ary = ary || [];
    let str = '';
    ary.forEach(item => {
        let {
            type,
            text,
            img,
            commentNum
        } = item;
        switch (type) {
            case 0:
                str+=`<li class='none_pic'>
                        <p>${text}</p>
                        <div class="comment_box">
                            <span>${commentNum}</span>
                            <span class='icon_com'></span>
                        </div>
                    </li>`;
                break;
            case 1:
                str += `<li class="one_pic">
                        <div class="img_box">
                            <img src="${img[0]}" alt="图片">
                        </div>
                        <div class="content_box">
                            <p>${text}</p>
                            <div class="comment_box">
                                <span>${commentNum}</span>
                                <span class='icon_com'></span>
                            </div>
                        </div>
                    </li>`;
                break;
            case 2:
                str += `<li class="two_pic">
                        <div class="img_box">
                            <img src="${img[0]}" alt="">
                        </div>
                        <div class="img_box">
                            <img src="${img[1]}" alt="">
                        </div>
                    </li>`;
                break;

            default:
                str += `<li class="three_pic">
                        <p>${text}</p>
                        <div class='three_box'>
                            <div class="img_box">
                                <img src="${img[0]}" alt="">
                            </div>
                            <div class="img_box">
                                <img src="${img[1]}" alt="">
                            </div>
                            <div class="img_box">
                                <img src="${img[2]}" alt="">
                            </div>
                        </div>
                        <div class="comment_box">
                            <span>${commentNum}</span>
                            <span class='icon_com'></span>
                        </div>
                    </li>`;
                break;
        }
    })
    // $('.list_box').html(str);
    // $('.list_box')[0].innerHTML += str;
    $('.list_box').append(str);
}


function toTop(){
    // 实现悬浮
    // 比较 卷去的高度 和  tab距离body的上边
    let sT = document.documentElement.scrollTop || document.body.scrollTop;
    let targetT = $('.tab').eq(1).offset().top;// offset返回值是一个对象，
    // debugger;
    if(sT >= targetT){
        // 说明 tab的上边 已经到达顶部；
        $('.fixed').removeClass('hide')
    }else{
        $('.fixed').addClass('hide')
    }
}

function getMore(){
    // 用 top这个元素到body的距离  跟 卷去高度比较
    let sT = document.documentElement.scrollTop||document.body.scrollTop;
    let cH = document.documentElement.clientHeight||document.body.clientHeight;
    let targetT = $('.top').offset().top;
    // top 元素 露出
    console.log(sT,cH,targetT);
    if(sT + cH + 10 >= targetT){
        getList();// getList 获取新元素； 会默认调用renderList
    }
}
window.onscroll = function () {
    toTop();
    getMore();
}