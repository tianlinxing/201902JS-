/*
    ref react提供的获取DOM元素或者组件的一个属性
        只能获取一个元素，循环出来的也是只能获取一个
        两种写法 一个是字符串（不推荐）； 另一个是 回调函数

    react的表单元素   
        获取表单元素的值 我们有两种方法 
        1、通过获取元素  来获取内部的value值；    非受控组件
        2、通过给表单元素的value绑定一个私有变量（state中的属性）；
            再通过 onChange 来修改state对应的值；  受控组件  react推荐使用的方式
    
    生命周期钩子函数：
    挂载阶段：
        constructor ==> componentWillMount ==> render ==> componentDidMount
    更新阶段：   
        componentWillReceiveProps(nextProps) ==> shouldComponentUpdate(nextProps,nextState)
        ==> componentWillUpdate  ==> componentDidUpdate ==> componentWillUnmount


        16.3新增 
        static getDerivedStateFromProps(props, state){
            // 初次加载和更新时都会触发
            props 是接受的 父组件属性
            state 是本组件自己的state
            返回值是一个 对象 或者 null  最终会合并到本组件的state中；
        } 
        getSnapshotBeforeUpdate(){
            更新之前触发 
            返回值会传给 DidUpdate
        }
*/

import React from 'react';

class Son extends React.Component {
    componentWillUnmount(){
        console.log('卸载')
        clearInterval(this.timer)
    }
    fn(){
        this.timer = setInterval(()=>{
            console.log('定时器')
        },1000)
    }
    componentDidMount(){
        this.fn();
    }
    render(){
        return <div>
            <h2>子组件</h2>
        </div>
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'zf'
        }
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        // /prevProps更新之前的 props
        console.log('BeforeUpdate')
        return {
            q:12
        }
    }
    componentDidUpdate(prevProps,prevState,obj){
        console.log(obj)
    }
    fn(){
        console.log(this.refs.myh2)
        console.log(this.myh3)
        console.log(this.inp.value)
    }
    change(e){
        this.setState({
            name:e.target.value
        })
    }
    render() {
        console.log('render')
        return <div className=''>
            <h2 ref='myh2'>hello</h2>
            <h3 ref={(el)=>{this.myh3 = el}}></h3>
            <input ref={(el)=>{this.inp = el}} type="text" placeholder='姓名'/>
            <input type="text" value={this.state.name} onChange={(e)=>{this.change(e)}}/>
            <button onClick={this.fn.bind(this)}>获取元素</button>
            
            {
                this.state.name > 3 ? <Son/> : null
            } 
            {/* <Son/> */}
        </div>;
    }
}

export default App