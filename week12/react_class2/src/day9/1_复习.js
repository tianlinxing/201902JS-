import React from 'react'
// create-react-app  :  npm i create-react-app -g

//react  react-dom

// jsx 语法 js + xml
//  js 写元素 正常写 ；   元素中写js 用{} 
let ele = <div>
    nihao 
</div>
// 循环 经常用 map

// jsx 语法最终 被babel 转成了   React.createElement()

// jsx 实现原理

// react 组件  function   class，组件名首字母必须大写
function Hello(props){
    return <h2></h2>
}
class Hello2 extends React.Component{

}
// 组件的两个数据来源  props  state
// 更改state  setState   对象  回调     对象+回调
// setState 异步

// 事件绑定 onClick= {} ; ;需要注意的一个 事件对象的传递  一个this的指向

// 表单  受控组件  非受控组件
// ref  ref='qqq'   ref={(el)=>{this.qqq=el}}

// 子父组件数据交互
 