import React from 'react'
import ReactDOM from 'react-dom'

// 隔一秒 实现一次render
// react 在更新的时候 会自动更新对应节点； 其他无关节点不会更新
setInterval(()=>{
    let time = new Date();
    let ele = (<div>
        <h1>
            当前时间是： {time.getSeconds()}
        </h1>
        <h2>你好</h2>
        珠峰
    </div>)
    
    ReactDOM.render(ele,document.getElementById('root'));
},1000)
