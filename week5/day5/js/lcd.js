(function (win) {
  class Subscribe {
    constructor() {
      this.pond = [] //将事件池（计划表）挂载到实例上面
    }

    add(fn) {
      //数组上也有indexOf和includes
      let isExist = this.includes(fn)
      !isExist ? this.pond.push(fn) : void 0 //void  0用于产生undefined，表示什么也不做
      return this
    }

    includes(fn) {
      this.pond.includes(fn)
    }

    remove(fn) {
      if (!this.includes(fn)) return
      this.pond = this.pond.filter(item => {
        item !== fn
      })
    }

    fire(...arg) {
      console.log(this.pond)
      this.pond.forEach((item) => item(...arg))
    }
  }

  win.Subscribe = Subscribe
})(window)

function fn1() {
  console.log(1)
}

function fn2() {
  console.log(2)
}

function fn3() {
  console.log(3)
}

let plan = new Subscribe()
plan.add(fn1).add(fn2).add(fn3)
setTimeout(plan.fire, 2000)
setTimeout(function () {}, 2000)
