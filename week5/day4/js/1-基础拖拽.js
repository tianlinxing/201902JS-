/*
* 目标：
*   1. 理解拖拽效果、原理
*   2. 实现基本拖拽
*
* */
/*
* 需求：页面当中的盒子dragObj，我们需要它有拖拽的功能。具体：
*   1. 点击这个盒子，鼠标左键不松开；
*   2. 按住鼠标左键不松开移动鼠标，盒子要跟着鼠标移动；
*   3. 当我拖到目的地（我想停止拖拽的地方）松开鼠标左键，盒子就要停在松开鼠标的位置；
*   4. 当我松开鼠标后，无论我怎么动鼠标，盒子都不能跟着动。
* */
/*
* 实现：我们先分析需求中拖拽的阶段，发现一共分为三个阶段：
*   1. 鼠标按下时赋予这个盒子可以被拖动的能力；
*   2. 拖动其实就是鼠标移动，盒子跟随；即在mousemove事件中，实现鼠标跟随；
*   3. 松开鼠标左键，移除盒子的能够被拖动的能力；
*
*   综上，在鼠标按下时即mousedown事件触发时，给元素绑定mousemove事件，在mousemove事件函数中实现鼠标跟随。最后鼠标抬起即mouseup事件触发，在mouseup的事件函数中取消可以被拖动的能力（在mouseup时移除mousemove事件）；
*
* */

let dragObj = document.getElementById('dragObj');

dragObj.onmousedown = dragStart;// 监听鼠标按下事件，赋予拖动能力
dragObj.onmouseup = dragEnd; // 监听鼠标抬起事件，移除拖动能力
function dragStart(e) {
  // 开始拖拽
  // 1. 记录盒子初始位置、鼠标按下时鼠标的位置
  this.startX = e.pageX; // 鼠标按下时鼠标的x轴坐标
  this.startY = e.pageY; // 鼠标按下时鼠标的y轴坐标

  // !!! xxx.style.xxx这种方式只能获取写在html行内的样式；
  this.startL = parseFloat(this.style.left); // 获取盒子初始的left值
  this.startT = parseFloat(this.style.top); // 获取盒子的初始top值

  dragObj.onmousemove = dragMove;
}
function dragMove(e) {
  // 拖动
  // 1. 拖动的过程中实时计算鼠标相对于初始位置移动了多少
  let moveX = e.pageX - this.startX;
  let moveY = e.pageY - this.startY;
  // 2. 计算盒子应该出现的位置
  let curL = this.startL + moveX;
  let curT = this.startT + moveY;
  // 3. 将盒子的left、top分别设置成它应该出现的位置
  this.style.left = `${curL}px`;
  this.style.top = `${curT}px`;
}
function dragEnd(e) {
  // 结束拖拽
  dragObj.onmousemove = null; // 取消mousemove事件，拖动能力随之被取消
}








