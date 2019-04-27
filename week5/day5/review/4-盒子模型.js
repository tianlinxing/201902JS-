/*
* js盒子模型：
*   1. client系列
*     clientWidth：内容宽度+左右padding
*     clientHeight：内容高度+上下padding
*     clientLeft：左边框宽度
*     clientTop：上边框宽度
*
*   2. offset系列
*     offsetWidth: clientWidth + 左右边框
*     offsetHeight： clientHeight + 上线边框
*     offsetLeft：距离父参照物左偏移量
*     offsetTop：距离父参照物的上偏移量
*     【offset方法需要掌握】
*
*
*   3. scroll系列
*     scrollWidth：包含滚动条卷去的距离的宽度
*     scrollHeight：包含滚动条卷去的距离的高度
*     scrollLeft：横向滚动条卷去的距离
*     scrollTop：纵向滚动条卷去的距离
*
*   4. 获取元素计算生效的样式：window.getComputedStyle(对象, 伪类) 返回一个对象；IE低版本有一个 元素.currentStyle 【currentStyle是元素对象的属性，不是方法】
*
*   5. 图片懒加载（包括计算何时图片出现在浏览器可视窗口内）
*
*   6. getCss、setCss、css、以及操作className的方法
*
*   7. 瀑布流【函数节流和防抖】
*
*   8. 动画思想 animate.js 库；做动画一定要想好什么时候清除定时器；
*
* */