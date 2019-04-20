/*
* 轮播图（焦点图）需求：
*   1. 实现一个轮播图，要循环播放（如果播放到最后一个，在播放就要播放第一个）；
*   2. 轮播图下面的小点（焦点）也要跟着动；
*   3. 鼠标放到轮播图展示窗口上的时候停止自动轮播，停止自动轮播后，手动切换按钮（左右两个箭头）要出现，并且点击左右两个箭头，也能实现手动切换，点击左边的时候展示上一张，点击右侧的展示下一张，手动切换也要满足循环播放；
*   4. 点击轮播图下面的小点（焦点）也要切换到对应到图片展示。
* */

/*
* 轮播图原理：
*   1. 在最外层有一个container的盒子，这个盒子的宽高只能展示一张图片，其余的溢出隐藏(overflow: hidden);
*   2. 在container下面还有一个盒子wrapper，这个wrapper下面包裹的都是图片，这些图片都在一行展示。
*   3. 所谓轮播就是：让wrapper相对于container绝对定位，默认展示第一张图，轮播一次就是让wrapper向左边移动一张图片宽度，这时container就展示的是第二张图，如果在轮播一次，就是再让wrapper向左一张图片的宽度，这时container展示的第三张图片，以此类推，我们发现container正在展示的图片，就是wrapper的left值是：-1 * 当前图的索引 * 图片宽度。
*   4. 所以我们想让container展示索引为n的图片，就把wrapper的left值设置为：-1 * n * 图片宽度；所以我们搞一个变量出来用来记录当前展示图片的索引，我们称其为stepIndex，并且因为页面打开时就需要展示第一张图，而第一张图片的索引是0，所以stepIndex初始值为0
*   5. 我们想轮播一次，就让stepIndex++，然后将wrapper的left值设置为：-1 * stepIndex * 图宽。如果想让它动画着过去，就把动画的终点设置为-1 * stepIndex * 图宽
*
*
*
* */

/*
* I. 目标：
*   1. 绑定数据
*   2. 实现轮播
* */

// 1. 获取元素对象
let $container = $('.container');
let $wrapper = $('.wrapper');
let $focus = $('.focus');
let $arrowLeft = $('.arrowLeft');
let $arrowRight = $('.arrowRight');
let $slideList = null;
let $focusList = null;

// 配置轮播所需参数
let stepIndex = 0; // 记录当前正在轮播的图片索引，因为我们需要使用索引来控制轮播
let autoTimer = null; // 记录定时id，以便于我们想停止轮播时可以清除定时器
let interval = 3000; // interval 是轮播的间隔时间

$.ajax({
  url: 'json/banner.json',
  method: 'GET',
  async: false,
  dataType: 'json',
  success (data) {
    // console.log(data);
    bindHTML(data);
  },
  error: function (err) {
    console.log(err);
  }
});

// 2. bindHTML 绑定数据
function bindHTML(data) {
  // 2.1 设置基础字符串:图片的、焦点的
  let slideStr = ``;
  let focusStr = ``;
  // 2.2 遍历数据 拼接html字符串
  data.forEach((item, index) => {
    let { img, desc } = item;
    slideStr += `<div class="slide"><img src="${img}" alt="${desc}"></div>`
    focusStr += `<li class="${index === 0 ? 'active' : ''}"></li>`
  });

  // 2.3 插入到页面中
  $wrapper.html(slideStr);
  $focus.html(focusStr);

  // 2.4 重新获取$slideList $focusList
  $slideList = $('.slide');
  $focusList = $('.focus > li');

  // 2.5 动态设置wrapper的宽度
  $wrapper.css({
    width: $slideList.length * 1000
  })
}

// 3. autoMove 实现轮播切换
function autoMove() {
  stepIndex++; // stepIndex表示的是container正在展示的图片索引，如果想让它展示成下一张，我们需要让stepIndex++;

  // 让wrapper运动到指定位置
  $wrapper.animate({
    left: -1 * stepIndex * 1000
  }, 2000);
}

autoTimer = setInterval(autoMove, interval);
















