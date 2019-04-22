const { toJSON } = window._utils

/*  一、数据获取  */

// 获取页面初始数据
function getInitData(callback) {
  // 创建ajax实例
  const xhr = new  XMLHttpRequest()

  // 配置ajax请求信息（请求方式、请求地址、同异步）
  xhr.open('GET', './data.json', false)

  // 绑定ajax响应监听事件  0 1 2 3 4
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
      callback(toJSON(this.responseText))
    }
  }
  // 发送ajax请求
  xhr.send()
}


// 获取操作元素
const $ = slector => document.querySelector(slector)
// 轮播视口
const container = $('#container')
// 图片容器
const wrapper = $('#container>.wrapper')
// 焦点容器
const focus = $('#container>.focus')

// 渲染数据
function renderer(data) {
  let wrappStr = '' // 拼接轮播图片 
  let focusStr = '' // 拼接轮播焦点
  data.forEach((item, idx) => {
    wrappStr += `<img src="${item.img}" alt="轮播图" />`
    focusStr += `<span class="${idx === 0 ? 'active' : ''}"></span> `
  })

  // 额外拼接最后一张（和第一张一模一样的）
  wrappStr += `<img src="${data[0].img}" alt="轮播图" />`

  // 将拼接好img 输出到wrapper中
  wrapper.innerHTML = wrappStr 

  // 将拼接好的焦点输出
  focus.innerHTML = focusStr
}

// 回调函数：就是把一个函数作为参数，传递到另一个函数里，让他在里面执行
// 把renderer 作为回调函数 传递getInitData里面，接收请求到的数据
// 开始请求数据
getInitData(renderer)

/*  2.轮播核心功能  */
// 获取一张图片的宽度
const wid = container.clientWidth

// 获取所有轮播图片的个数
const len = wrapper.getElementsByTagName('img').length
// 最后一张图的索引
const lastIdx = len - 1

// 记录当前轮播图片的索引
container.step = 0

// 切换图片
// left = 下一张图片索引 * -wid(一张图片宽度)
function nextStep(step) {

  // --container.step 切换到上一张
  // ++container.step 切换到下一张
  // if (!isNaN(step)) { // 切换到指定索引位置
  //   container.step = step
  // } else if (step === 'prev') { // 切换到上一张
  //   --container.step
  // } else { // 切换到下一张
  //   ++container.step
  // }

  !isNaN(step) ? container.step = step : (step === 'prev' ? --container.step : ++container.step)

  // 右边边界判断 （当切换的索引 超过最后一个索引）
  // 1.立马回到第一张图片 wrapper.style.left = 0
  // 2.紧接着过渡到正数第二张图片 container.step = 1
  if (container.step > lastIdx) {
    console.log('到达右边边界')
    wrapper.style.left = 0
    container.step = 1
  }

  // 左边边界判断
  // 1.立马变成最后一张图片wrapper.style.left = lastIdx * -wid
  // 2.紧接着过渡到倒数第二张图片container.step = lastIdx - 1
  if (container.step < 0) {
    console.log('到达左边边界', container.step)
    wrapper.style.left = lastIdx * -wid + 'px'
    container.step = lastIdx - 1
  }

  // 从当前图片 过渡到下一张图片 默认300毫秒
  $animate({
    ele: wrapper,
    target: {
      left: container.step * -wid
    },
    // duration: 5000
  })

  // 焦点同步  container.step 切换图片的索引
  changeColor(container.step)
}

container.timerID = null // 保存自动轮播定时器ID
// 自动轮播开启
function autoMove(){
  container.timerID = setInterval(nextStep, 2000)
}
// 开始自动轮播
autoMove()

// 鼠标滑入滑出事件
// 滑入时清除轮播定时器 停止自动轮播
container.onmouseover = function() {
  clearInterval(this.timerID)
}

// 滑出时再重新 开启自动轮播
container.onmouseout = function() {
  autoMove()
}

// 左右切换
const left = $('#container>.left')
const right = $('#container>.right')
left.onclick = function() {
  nextStep('prev') // 切换到上一张
}

right.onclick = function() {
  nextStep() // 切换到下一张
}

// 焦点状态同步
const focusList = focus.getElementsByTagName('span')
// 让焦点索引为idx 那一个元素为选中样式 .active
function changeColor(idx) {
 // 如果当前是最后一张图片（和第一张一样的）
 // 应该让第一个焦点为选中状态
 idx === lastIdx && (idx = 0)

 for (let i = 0; i < focusList.length; i++) {
  focusList[i].className = i === idx ? 'active' : ''
 }
}

// 焦点点击切换
function fcousStep() {
  for (let i = 0; i < focusList.length; i++) {
    focusList[i].onclick = function() {
      nextStep(i)
    }
  }
}
fcousStep()
