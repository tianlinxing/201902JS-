import React from 'react';

function Button(props){

}
class App extends React.Component {
    constructor(props) {
        super();
        
    }
    add=()=>{}
    render() {
        return <div className=''>
            <Button id='123' key = 'www' q = '2'></Button>
        </div>;
    }
}

export default App
/*
    jsx 凡是DOM包含的变量 都是 用 {};

    // 首字母必须大写
    function 
    class

    react组件的数据来源 state   props(只读属性)
    setState({})  setState(()=>{})   setState({},()=>{})
    setState 是个异步

    react 事件   onClick={()=>{}} onClick={this.xxx.bind(this)}

    子父组件的数据传递：
        父传子  使用  自定义行内属性   类似于vue
        子传父  使用  自定义行内属性   就是一个发布订阅

    vue 的 slot  在react中 使用的是  this.props.children    
*/