/*
* 目标：
*   1. 结合发布订阅优化弹性势能动画
* */
/*
* 分析与订阅发布的结合？
* 我们需要在拖拽结束后开启水平方向和垂直方向上的两个动画。这说明我们订阅了在拖拽结束的这个时机要执行两个方法。所以我们现在不再是直接将这两个动画放在拖拽结束后，而是选择在拖拽结束后触发我们订阅这个时机的方法；
*
*
* */


let dragObj = document.getElementById('dragObj');

dragObj.onmousedown = dragStart;// 监听鼠标按下事件，赋予拖动能力
let plan = new Subscribe();
plan.add((_this) => {
  _this.flyTimer = setInterval(() => fly(_this), 20)
}).add((_this) => {
  _this.dropTimer = setInterval(() => drop(_this), 30);
}).add(() => {
  console.log(123);
}).add(() => {
  console.log(456);
});


function dragStart(e) {
  clearInterval(this.flyTimer);
  clearInterval(this.dropTimer);
  this.startX = e.pageX; // 鼠标按下时鼠标的x轴坐标
  this.startY = e.pageY; // 鼠标按下时鼠标的y轴坐标
  this.startL = parseFloat(this.style.left); // 获取盒子初始的left值
  this.startT = parseFloat(this.style.top); // 获取盒子的初始top值
  this.DRAGM = dragMove.bind(this);
  this.DRAGE = dragEnd.bind(this);
  document.addEventListener('mousemove', this.DRAGM, false);
  document.addEventListener('mouseup', this.DRAGE, false);

  // 存储按下时鼠标所在x轴坐标
  this.prevX = e.pageX;
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

  // 4. 因为两次mousemove事件触发的时间是固定的，所以把两次之间鼠标走过的距离当做速度。
  this.hSpeed = e.pageX - this.prevX;
  this.prevX = e.pageX; // 每次mousemove都需要更新prevX，因为本次是下一次的上一次。
}
function dragEnd(e) {
  document.removeEventListener('mousemove', this.DRAGM, false);
  document.removeEventListener('mouseup', this.DRAGE, false);

  // 计算盒子可以移动的最大left值
  this.maxL = (document.documentElement.clientWidth || document.body.clientWidth) - this.offsetWidth;
  this.maxT = (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight;

  // 设置垂直方向的下落初速度：
  this.dropSpeed = 0;
  
  plan.fire(this); // 这里就是发布时间，因为这里已经到达了我们订阅的拖拽结束的时刻；这里的这个this就是我们拖拽的元素对象，通过fire方法可以传递给订阅这个时刻的方法；
}

function fly(_this) {
  // 方法是处理水平方向的动画的
  // 1. 计算下一时刻盒子应该处于的位置
  _this.hSpeed *= 0.98; // 就是不断的让速度衰减

  if (Math.abs(_this.hSpeed) < 1) {
    // 当hSpeed小于一定值的S时候，在浏览器中盒子的动画已经看不出来了，这时候这个动画已经没有意义，所以需要清除定时器，结束动画
    clearInterval(_this.flyTimer);
    return;
  }
  let curL = parseFloat(_this.style.left) + _this.hSpeed;

  // 2. 越界判断，如果越界需要修正
  if (curL >= _this.maxL) {
    curL = _this.maxL;
    _this.hSpeed *= -1; // 乘等于-1是让盒子到了右边界反弹；
  }

  if (curL <= 0) {
    curL = 0;
    _this.hSpeed *= -1; // 表示已经到达左边界，我们需要它反弹，
  }
  _this.style.left = `${curL}px`;
}
function drop(_this) {
  // 设置一个标识符，如果盒子触底就++，不触底就就置为0
  if (!_this.canBounce) _this.canBounce = 0;

  // 处理垂直方向上的动画；垂直方向的动画就是不断修改盒子的top值。

  // 1. 累加速度，让速度变大
  _this.dropSpeed += 5;
  _this.dropSpeed *= 0.98; // 为了让速度衰减，我们乘以一个小于1的数字

  // 2. 计算盒子应该出现的位置
  let curT = parseFloat(_this.style.top) + _this.dropSpeed;

  // 3. 处理越界判断，如越界需要修正

  if (curT >= _this.maxT) {
    curT = _this.maxT;
    _this.dropSpeed *= -1; // 此时盒子触底了，所以需要反弹，就需要给速度乘等于-1；
    _this.canBounce++; // 表示盒子已经到底部了，需要给canBounce++，
  } else {
    _this.canBounce = 0;
  }
  if (curT < 0) {
    curT = 0;
    _this.dropSpeed *= -1;
  }

  // 4. 将盒子的top值设置它应该去的地方的top值；
  _this.style.top = `${curT}px`;
  console.log(_this.canBounce);
  if (_this.canBounce >= 2) {
    clearInterval(_this.dropTimer);
  }
}