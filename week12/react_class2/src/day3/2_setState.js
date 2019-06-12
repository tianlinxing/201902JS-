import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a:0
        }
    }
    fn(){
        let a = this.state.a;
        // this.setState({
        //     // 跟对象
        //     a:a+1
        // })
        // this.setState((prev)=>{
        //     // 跟一个回调函数
        //     // prev 是 上次的 state;
        //     console.log(prev.a)
        //     return {
        //         a:a+1
        //     }
        // })
        this.setState({
            a:a+1
        },function(){
            // state更改之后触发该函数
        })
    }
    render() {
        return <div className=''>
            <h2>{this.state.a}</h2>
            <button onClick={this.fn.bind(this)}>按钮</button>
        </div>; 
    }
}
// react 两个数据来源  一个state状态  props属性（只读）

// prop-types  中午安装   cnpm i  prop-types   ==》装到react_class2项目中

export default App