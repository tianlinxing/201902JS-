/*
* 事件：
*   1. 鼠标事件
*     mousedown
*     mouseup
*     click
*     dbclick
*     oncontextmenu（鼠标右键）
*     mousemove
*     mouseenter
*     mouseleave
*     mouseover
*     mouseout
*   2. mouseenter、mouseleave、mouseover、mouseout
*     2.1 关于冒泡
*     2.2 从父元素进入子元素不会触发父元素的leave事件，但是会触发mouseout事件
*   3. 键盘事件：靠键码区分按下的是哪一个
*     keydown
*     keyup
*     keypress
*   4. 事件对象
*     clineX、clientY 鼠标距离浏览器可视区的x、y轴坐标
*     pageX、pageY 鼠标相对于body的x、y轴坐标
*     keyCode 键盘按下键的键码
*     target 事件目标
*   5. 阻止默认行为、阻止冒泡
*     阻止默认行为：标准：preventDefault() IE：e.returnValue = false
*     阻止冒泡：         stopPropagation() IE: e.cancelBubble = true
*   6. 事件委托：利用事件冒泡把事件绑定给高层级的元素，结合e.target判断事件源是谁
*   7. DOM0和DOM2的区别：
*     7.1 DOM0只能绑定一个，而且只能绑在冒泡
*     7.2 DOM2可以绑多个，还可以绑在捕获阶段
*   8. 标准和IE的DOM2
*     8.1 addEventListener/ removeEventListener()
*     8.2 attachEvent() / detachEvent() 且IE只能绑在冒泡
*   9. 拖拽、放大镜 => 鼠标跟随
*   10. 弹性势能动画（做了解）
*   11. 发布订阅模式
*
*
* */