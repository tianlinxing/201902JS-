/*
* 目标：
*   1. 熟悉如何向jq自身上扩展方法
*   2. 熟悉如何向jq原型上添加方法
*
* */
// 1. 向jq自身上扩展方法: $.extend({方法名：方法对应的函数, ....})
$.extend({
  sayName: function () {
    console.log('I am bingo');
  }
});
$.sayName();
// $('#fields').sayName(); // 报错，因为方法是定义jq自身的，只能jq自己调用

// 2. 向jq的原型上扩展方法：$.fn.extend({方法名：function () {}, ...})
$.fn.extend({
  hello: function () {
    console.log('hello world');
  }
});

$('#fields').hello();