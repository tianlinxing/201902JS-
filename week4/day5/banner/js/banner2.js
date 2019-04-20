/*
* II. 目标
*   1. 实现无缝轮播
*   2. 实现焦点跟随
* */
/*
* 无缝轮播实现：我们向$slideList末尾多拼接一个第一张图片，当轮播到最后一张时，container展示图片和第一张图片一样，给人的感觉已经已经从最后一张播到到第一张了，此时我们把wrapper的left设置成0，这个设置只需要很短的时间，同时修改stepIndex为1，这时再轮播时container展示的就是第二张图片。
*
*
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
let interval = 1000; // interval 是轮播的间隔时间

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
  // 为了实现无缝轮播，我们在末尾需要多拼接一个第一张图片
  slideStr += `<div class="slide"><img src="${data[0].img}" alt="${data[0].desc}"></div>`;

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
  if (stepIndex >= $slideList.length) {
    // 当stepIndex >= $slideList.length 说明已经播到最后一张（因为我们给$wrapper多拼接了一个第一张，所以播到最后一张的时候，container真实图片的第一张），再播就该播真实图片的第二张了，所以stepIndex应该设置成1

    $wrapper.css({
      left: 0
    });
    stepIndex = 1;
  }
  // 让wrapper运动到指定位置
  $wrapper.animate({
    left: -1 * stepIndex * 1000
  }, 200);
  changeFocus();
}

// 4. changeFocus 实现焦点跟随
function changeFocus() {
  // 播第一个图片时第一个小点选中，播第二个的时候是不是第二个小点选中
  // 因为stepIndex控制着播放第几张，所以stepIndex对应的小点也该选中
  // 但是因为我们把第一张图片复制了一份放在末尾，所以当播到最后一张的时候，container展示的是一张图，所以对应着我们应该让第一个小点选中。
  let tmpIndex = stepIndex; // 因为stepIndex控制轮播图播放顺序，我们不能随意更改，复制一份
  if (tmpIndex === $slideList.length - 1) {
    tmpIndex = 0;
  }
  $focusList.eq(tmpIndex)
    .addClass('active')
    .siblings()
    .removeClass('active');

}

autoTimer = setInterval(autoMove, interval);

















