import React from 'react'
import ReactDOM from 'react-dom'

// 声明组件 react 都是 函数(类)
// 有两种方式  function   class
// vue组件使用 当作标签使用
// react组件名 必须是 大写字母开头的；也可使用单标签
function Hello (props){
    console.log(props)
    let {id,className} = props;
    return <h2 id={id} className={className}>
        hello 
    </h2>
}

let obj = {a:12,b:13}

// 当组件被调用时， react会把它当作类执行，并给传递了一些参数
// 它是把组件的行内属性 组合成了一个对象； 然后传给对应的组件
// 行内属性的值 可以是 任意数据类型；
ReactDOM.render(<Hello id='123' className='box' obj={obj}></Hello>,document.getElementById('root'))