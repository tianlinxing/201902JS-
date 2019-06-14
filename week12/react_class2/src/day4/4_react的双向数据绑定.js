import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        // 受控组件  本组件内部的表单受本组件自己的state控制的 组件
        // 非受控组件  本组件内部的表单不受组件自己的state控制的 组件
        // react 建议书写 受控组件
        this.state = {
            name:'珠峰'
        }
    }
    fn(e){
        this.setState({
            name:e.target.value
        })
    }
    render() {
        return <div className=''>
            <h2>{this.state.name}</h2>
            <input type="text" value={this.state.name} 
            onChange={(e)=>{this.fn(e)}}/>
        </div>;
    }
}

export default App