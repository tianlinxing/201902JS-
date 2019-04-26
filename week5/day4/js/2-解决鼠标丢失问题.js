/*
* 目标：
*   1. 理解鼠标丢失原因
*   2. 解决鼠标丢失问题
* */
/*
* 鼠标丢失的原因：
*   当鼠标移动的时候，因为浏览器计算盒子应该出现的位置是需要一定的时间的。如果你在这一段时间内再次移动移动鼠标，因为上一次mousemove时盒子位置还没计算完，所以也没办法设置到上一次应该出现的位置，这时鼠标就把元素丢了。丢失元素后再移动鼠标，也就没办法触发盒子的mousemove事件了，所以盒子也就没办法跟随鼠标了；
*   丢失元素后再抬起鼠标左键，触发的也不是这个盒子的mouseup事件，所以盒子的跟随鼠标移动的能力即mousemove事件没能被移除。这就导致当鼠标再次回到盒子上时，盒子还能跟着鼠标动。
*
* */

/*
* 解决方案：
*   1. 将元素和鼠标绑定在一起setCapture()，当拖拽结束后再解绑 releaseCapture() 【chrome浏览器不兼容，IE和firefox可以用】
*   2. 因为不管鼠标怎么移动，都不会出了浏览器页面，所以我们就把元素的mousemove和mouseup事件绑定给document；（采用事件委托的思路思路解决问题）；
*
*
*
* */

let dragObj = document.getElementById('dragObj');

dragObj.onmousedown = dragStart;// 监听鼠标按下事件，赋予拖动能力

function dragStart(e) {
  // this.setCapture();chrome不兼容

  // 开始拖拽
  // 1. 记录盒子初始位置、鼠标按下时鼠标的位置
  this.startX = e.pageX; // 鼠标按下时鼠标的x轴坐标
  this.startY = e.pageY; // 鼠标按下时鼠标的y轴坐标

  // !!! xxx.style.xxx这种方式只能获取写在html行内的样式；
  this.startL = parseFloat(this.style.left); // 获取盒子初始的left值
  this.startT = parseFloat(this.style.top); // 获取盒子的初始top值

  // 将mousemove事件委托给document：但是这样做会有一个问题，dragMove函数中的this就变成了document，事实上我们希望this是我们拖动的盒子；
  // document.addEventListener('mousemove', dragMove, false);
  // 所以我们需要处理dragMove函数中的this
  this.DRAGM = dragMove.bind(this);
  this.DRAGE = dragEnd.bind(this);
  document.addEventListener('mousemove', this.DRAGM, false);
  document.addEventListener('mouseup', this.DRAGE, false);
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
  // this.releaseCapture(); Chrome不兼容此方法
  // 结束拖拽
  document.removeEventListener('mousemove', this.DRAGM, false);
}
