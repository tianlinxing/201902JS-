$(function ($) {
  // 1. 获取元素
  let $headerList = $('.header > li');
  let $panelList = $('.panel > div');
  // 2. 绑定事件
  $headerList.click(function () {
    // console.log(this); // this是点击的li并且是原生元素对象
    let $index = $(this).index(); // 获取当前点击的li的索引
    $(this).addClass('active') // 为当前点击的li增加active类名
      .siblings() // 获取当前点击的li的兄弟们；siblings() 获取当前元素的兄弟们（当前元素的所有哥哥和所有弟弟）
      .removeClass('active'); // 移除当前点击li的兄弟们的active类名
    $panelList.eq($index)  // 获取和当前点击li的索引相同的div；eq() 方法是获取当前jq对象(或者集合)中指定索引的元素对象，并且包装成jq对象返回
      .addClass('active') // 给点击的li的索引相同的div添加一个active
      .siblings() // 获取当前展示的div的兄弟们
      .removeClass('active'); // 移除当前展示div的兄弟们的active类名
  })
});