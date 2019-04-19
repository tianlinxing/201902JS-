/*
* 目标：
* 1. 熟练掌握jq常用的方法
* */

let $tabBox = $('#tabBox');
// 1. height() 不传参数是获取元素对象的高度，传参就是修改元素对象的高度
// // console.log($tabBox.height());
$tabBox.height(200 + 'rem'); // 默认单位是px，如果需要其他单位，就需要显示的设置，如设置rem（一个单位）

// 2. width() 获取元素对象的宽度，传递参数是设置元素对象的宽度
// // console.log($tabBox.width());

// 3. offset 获取元素到body左侧和上侧的偏移距离，返回值是一个对象{left: ,top: }
// console.log($tabBox.offset());

// 4. scrollTop() / scrollLeft() 获取纵向 / 横向滚动条卷去的距离
// console.log($(document.documentElement).scrollTop());

// 5. innerHeight() / innerWidth() 获取当前元素的高度 / 宽度 等效于clientHeight / clientWidth
// console.log($tabBox.innerHeight());
// console.log($tabBox.innerWidth());

// 6. outerHeight() / outerWidth() 获取元素包含边框的高度/宽度 相当于 offsetHeight / offsetWidth
// console.log($tabBox.outerHeight());

// 7. hasClass(类名) 判断当前元素有没有这个类名，有就返回true否则返回false

// console.log($tabBox.hasClass('tabBox1'));

// 8. addClass(类名) 为当前元素追加类名，返回当前jq元素对象（return this）
// console.log($tabBox.addClass('classByJq'));

// 9. removeClass(类名) 移除当前元素的某一个类名，返回当前jq元素对象
// console.log($tabBox.removeClass('classByJq'));

// 10. append() 向元素对象内追加元素
let $emptyUl = $('#emptyUl');
$emptyUl.append($('<li>12345678</li>'));

// 11. 元素.appendTo(容器) 将当前插入到指定容器中
$('<li>aaaaaaaaaaa</li>').appendTo($emptyUl);

// 12. prepend() / prependTo() 向容器开头添加元素对象
$emptyUl.prepend($('<li>bbbbbbbbbb</li>'));
$('<li>ccccccccc</li>').prependTo($emptyUl);

// 13. before() / after() 给当前元素之前或者之后添加【兄弟】元素
// $emptyUl.before($('<li>ddddddddd</li>'));

// 14. insertBefore() / insertAfter 将当前元素添加到参照元素之前或者之后

let newObj = $('<div>wwwwww</div>'); // 使用jq创建一个新元素，无需createElement。
// newObj.insertBefore($emptyUl);
// newObj.insertAfter($emptyUl);

// 15. replaceAll(selector) 用当前元素替换selector匹配到元素
// $('<ol></ol>').replaceAll('ul');

// 16. 元素.remove() 移除元素
// $emptyUl.remove();

// 17. next() / nextAll() 获取当前元素的下一个弟弟 / 获取所有的弟弟
// console.log($emptyUl.next());
// console.log($emptyUl.nextAll());

// 18. prev() / prevAll() 获取当前元素的上一个哥哥 / 获取当前元素所有的哥哥
// console.log($('#contentFilter').prev());
// console.log($('#contentFilter').prevAll());

// 19. children() 获取当前元素的元素儿子
// console.log($('#contentFilter').children()); // 获取所有的儿子
// console.log($('#contentFilter').children('.first')); // 获取有first类名的儿子（children() 方法还可以使用其他选择器过滤）

// 20. parent() 获取当前元素的元素父亲
// console.log($('.first').parent());

// 21. filter(selector) 在同级中把满足selector的元素获取到（同级查找，在兄弟之间查找）
// console.log($('.header li').filter('.active')); // 把header下的li并且是带有active类名的li获取到

// 22. find(selector) 从当前元素的后代中获取满足selector的元素
// console.log($('#tabBox').find('li.active'));

// 23. css 方法，
// 元素.css('width') 获取元素的width
// 元素.css('width', '200px') 设置元素的width
// 元素.css({width: '200px', backgroundColor: '#00b38a'})
// $('#tabBox').css('height', 250); // 不写单位，默认单位是px
// console.log($('#tabBox').css('width')); // 返回了一个字符串，后面就不能链式调用（链式调用也叫级联）
// console.log($('#tabBox').css('width', 200)); // 返回了jq对象，可以继续链式调用

// 24. text() 传参就是设置元素的innerText，不传是获取元素的innerText
// console.log($('#tabBox').text());
// console.log($('li.active').text());
// console.log($('li.active').text('嘻哈'));

// 25. html() 传参就是设置元素的innerHTML，不传参就是获取innerHTML
// console.log($('#tabBox').html());
// console.log($('#tabBox').html('<p>这是一个p</p>'));
