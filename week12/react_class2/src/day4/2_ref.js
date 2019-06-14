import React from 'react';

class Count extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
    }
    fn(){
        this.setState({
            count: this.state.count+1
        })
        this.setState({
            count: this.state.count+1
        })
        this.setState({
            count: this.state.count+1
        })
        // setState 是异步  好处是 当有多次setState时，react 会自动合并成一个 setState
    }
    render(){
        return <div>
            <button onClick={()=>{this.fn()}}>增加</button>
            <h1>{this.state.count}</h1>
        </div>
    }
}
class Ref123 extends React.Component {
    // ref 是 react 提供的 用来获取DOM元素 或者组件的 一个属性； 类似于vue的ref;
    // 当我们用 ref获取组件时  获取到的组件  他内部的属性和方法我们都可以获取到；
    // 若多个元素使用 同一个 ref; 不管是循环出来的 还写死的 我都只能获取最后一个；

    // ref 有两种写法  一个 是 ref='字符串' ； 另一个是  ref = {(el)=>{}}

    fn(){
        console.log(this.refs)
        console.log(this.myCount)
    }
    render() {
        return <div className=''>
            <h2 ref='h2Box'>hello react</h2>
            <button onClick={this.fn.bind(this)}>获取元素</button>
            <Count ref='countBox'/>
            <Count ref='countBox'/>
            {
                [1,2,3].map((item)=><div key={item} ref='myDiv'>{item}</div>)
            }

            <Count ref={(el)=>{this.myCount = el;}}/>
            {/* 
                react渲染DOM时 ，发现ref后边跟的是一个 回调函数； 那么他会自动把该函数执行；
                并把当前这个元素或者组件 传给该函数；
                我们一般在该函数中 把传进来的元素 赋给当前组件的某个自定义的私有属性；
            */}
        </div>;
    }
}

export default Ref123