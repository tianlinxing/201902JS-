import React from 'react';
import List from './list'
import Input from './input'
import './index.less'

window.myComment = {};//自己造的事件池
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ary:[] // 放置 input组件传进来的数据，最终传给list组件
        }
    }
    submit(obj){
        console.log(obj)
        // input组件给的 obj
        // this.state.ary.unshift(obj)
        // this.setState({})  不标准

        this.setState({
            ary:this.state.ary.concat(obj)
        })// 标准写法
    }
    componentWillMount(){
        // 把改变this指向的 submit 事件 放到了 事件池中
        window.myComment.qqq = this.submit.bind(this)
    }
    render() {
        return <div className=''>
            <List data={this.state.ary}/>
            <Input  submit={(obj)=>{this.submit(obj)}}/>
        </div>;
    }
}

export default App

/*
    1、设置 input组件中的 表单元素内容
    2、点击子组件的提交时  把创造好的数据传给父组件
*/