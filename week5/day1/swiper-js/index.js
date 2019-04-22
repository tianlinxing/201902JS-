const { toJSON, css } = window._utils

// 获取图片数据
const getInitData = (callback) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', './data.json', false)
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
      callback(toJSON(this.responseText))
    }
  }
  xhr.send()
}

// 获取操作元素
const $ = selector => document.querySelector(selector)
const container = $('#container')
const wrapper = $('#container>.wrapper')
const focus = $('#container>.focus')

const slideList = wrapper.getElementsByTagName('img')

// 轮播视口宽度
const wid = container.clientWidth

let len = 0

// 渲染函数
const renderer = (data) => {
  let slideStr = ''
  let focusStr = ''
  data.forEach((item, idx) => {
    slideStr += `<img src="${item.img}" alt="" />`
    focusStr += `<span class="${idx === 0 ? 'active' : ''}"></span>`
  })
  slideStr += `<img src="${data[0].img}" alt="" />`

  wrapper.innerHTML = slideStr
  css(wrapper, 'width', wid * slideList.length )
  len = slideList.length

  focus.innerHTML = focusStr
}

// 回调函数：把一个函数作为参数 传入到另一个函数里面执行 sort((a, b) => a - b)

// 把renderer函数作为回调函数 传入到getInitData里面
// 获取初始数据并渲染
getInitData(renderer)

container.step = 0
function nextStep(flag) { // flag 'left' : 'right'
  // if (!isNaN(flag)) {
  //   container.step = flag
  // } else if ( flag === 'left') {
  //   container.step--
  // } else {
  //   container.step++
  // }
  !isNaN(flag) ? container.step = flag : (flag === 'left' ? container.step-- : container.step++)

  // 右边边界判断处理
  // len - 1 最后一张图片的索引（和第一张一模一样的图片）
  let lastIdx = len - 1
  if (container.step > lastIdx ) {
    css(wrapper, 'left', 0)
    container.step = 1
  }

  // 左边边界处理
  // step < 0
  if (container.step < 0) {
    css(wrapper, 'left',lastIdx * -wid)
    container.step = lastIdx - 1
  }

  $animate({
    ele: wrapper,
    target: {
      left: container.step * -wid
    }
  })
  changeColor(container.step)
}

container.timer = null
function autoMove() {
  container.timer = setInterval(nextStep, 2000)
}

autoMove()

container.onmouseover = function () {
  clearInterval(this.timer)
  left.style.display = right.style.display = 'block'
}

container.onmouseout = function() {
  autoMove()
  left.style.display = right.style.display = ''
}


const left = $('#container>.left')
const right = $('#container>.right')

left.onclick = function() {
  nextStep('left')
}

right.onclick = nextStep

const focusList = focus.getElementsByTagName('span')
for (let i = 0; i < focusList.length; i++) {
  focusList[i].onclick = function() {
    nextStep(i)
  } 
}

function changeColor(idx) {
   (idx === len - 1) && (idx = 0)
   for (let i = 0; i < focusList.length; i++) {
     i === idx ? focusList[i].classList.add('active') : focusList[i].classList.remove('active')
   }
}
