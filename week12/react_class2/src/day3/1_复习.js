import React from 'react'
import ReactDOM from 'react-dom'

// jsx  在 xml结构中 所有的变量 不管是行内式 还是 内容部分 都是用的 {}
// class  ===> className  for  ===> htmlFor  style={} 内容必须是对象
// 循环列表 一般使用 map
// 我们编写的这种DOM 结构最终会被  babel转译成  React.createElement('标签类型',{行内属性},...子节点)
let ary = [1,2,3,4];
let name = '珠峰';

function fn(arr=[]) {
    let tempAry = [];
    arr.forEach(item=>{
        tempAry.push(<div key={item}>{item}</div>)
    })
    return tempAry
}
let ele = <div >
    {name}
    {ary.map(item=><div key={item}>{item}</div>)}
    {fn([10,90,30])}
</div>
//


// react组件  function  class
// 标签名 首字母 大写,单闭合，双闭合 都可以；
// function 声明的组件          展示结构 是  return 值 决定的  ; 无状态组件
// class 声明  都需要继承公共类  展示结构 是  render函数的返回结果决定的

function Button(props){
    return <div>
        <h2>{props.title}</h2>
        <button>按钮</button>
    </div>
}

function Time(props){
    return <div>
        <h2>
            当前时间是 {props.time}
        </h2>
    </div>
}

class Button2 extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            // 是react 规定的 用来存储自己用的变量
            b:0
        }
        this.a = 12;
    }
    fn(n,m,e){
        console.log(666);
        console.log(this.a)
        console.log(e.target)
    }
    fn2(){
        // console.log(this.a = 100);
        // this.state.b = 200;
        // this.a = 100;
        // this.setState({});

        this.setState({
            b:this.state.b+1
        },function(){
            // 数据更新之后触发
            console.log(this.state.b)
        })
        // console.log(this.state.b)
        console.log(arguments)
    }
    render(){
        return <div className='btn2'>
            <h2>{this.props.title}</h2>
            {this.state.b}
            {this.a}
            <button onClick={this.fn.bind(this,1,2)}>按钮6</button>
            {/* 使用bind 相当于 给了 onClick 一个处理过this指向的新函数  this全是当前实例*/}
            <button onClick={(e)=>{this.fn2(e,1,2,3,4)}}>按钮66</button>
        </div>
    }
}

ReactDOM.render(<div>
    <Button title='你好'/>
    <Time time={new Date().toLocaleString()}/>
    <Button2 title='你好6'/>
    {/* 
        react  会把所有的行内属性 都打包成一个对象 然后传给 对应组件函数
        对应组件 通过形参 可以接收到对应的参数； 
    */}
</div>,document.getElementById('root'))
// setInterval(()=>{
//     ReactDOM.render(<div>
//         <Button title='你好'/>
//         <Time time={new Date().toLocaleString()}/>
//         {/* 
//             react  会把所有的行内属性 都打包成一个对象 然后传给 对应组件函数
//             对应组件 通过形参 可以接收到对应的参数； 
//         */}
//     </div>,document.getElementById('root'))
// },1000)
