let bannerRender = (function () {
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

  function queryData() {
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
  }
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
    let tmpIndex = stepIndex; // 因为stepIndex控制轮播图播放顺序，我们不能随意更改，复制一份
    if (tmpIndex === $slideList.length - 1) {
      tmpIndex = 0;
    }
    $focusList.eq(tmpIndex)
      .addClass('active')
      .siblings()
      .removeClass('active');

  }

// 5. handleContainer 当鼠标划入container的时候，停止自动轮播同时让左右箭头展示出来，当鼠标划出时，重启自动轮播，并且让左右箭头消失
  function handleContainer() {
    $container.on('mouseenter', function () {
      clearInterval(autoTimer);
      $arrowLeft.css({
        display: 'block'
      });
      $arrowRight.css({
        display: 'block'
      })
    }).on('mouseleave', function () {
      autoTimer = setInterval(autoMove, interval);
      $arrowLeft.css({
        display: 'none'
      });
      $arrowRight.css({
        display: 'none'
      })
    })
  }


// 6. handleArrow 处理箭头点击切换轮播
  function handleArrow() {
    // 点击右侧按钮时，效果就是切换下一张，而我们autoMove方法就是专门处理切换下一张的
    $arrowRight.click(autoMove);

    // 点击左边箭头，切换上一张，而stepIndex控制正在展示的图片索引，就需要stepIndex--
    $arrowLeft.click(function () {
      stepIndex--;

      if (stepIndex < 0) {
        stepIndex = $slideList.length - 2;
      }

      $wrapper.animate({
        left: -1 * stepIndex * 1000
      }, 200);
      changeFocus();
    })
  }

// 7. handleFocus 处理焦点点击时切换图片：点击第一个焦点时，就该展示第一个图片，点击第二个焦点，就应该展示第二个图片，我们发现被点击的焦点的索引和需要展示的图片索引一致，即和stepIndex一致，所以点击时修改stepIndex为点击焦点的索引。
  function handleFocus() {
    $focusList.click(function () {
      let $index = $(this).index();
      stepIndex = $index;
      $wrapper.animate({
        left: -1 * $index * 1000
      });
      changeFocus();
    })
  }

  return {
    init () {
      queryData();
      handleContainer();
      handleArrow();
      handleFocus();
      autoTimer = setInterval(autoMove, interval);
    }
  }
})();
bannerRender.init();