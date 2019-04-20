$(function ($) {
  let $headerList = $('.header > li');
  $headerList.on('click', function () {
    let $index = $(this).index();
    $(this).addClass('active')
      .siblings('.active') // 只查找带有active类名的兄弟（或者哥哥）
      .removeClass('active')
      .parent()
      .next()
      .children()
      .eq($index)
      .addClass('active')
      .siblings()
      .removeClass('active');
  })
});

$(function ($) {
  // DOMContentLoaded 事件：标志着页面的DOM结构已经加载完毕，加载完毕后就会触发这个事件
  // window.onload 事件：页面内所有的资源（图片、字体、css..）下载完成后才触发事件
  // 写在$(function ...) function 就是在页面DOM结构加载完成后执行的函数，并且$就是jq，会被注入到这个函数中，可以使用。
});