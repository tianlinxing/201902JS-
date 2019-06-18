import React,{Component} from 'react'

import {connect} from '../react_redux/react_redux2'

class Button extends Component{
    change(str){
        // 点击按钮执行的函数
        // 我们要根据 str 来设置 store中的state;
        // debugger
        this.props.qqq({type:'UPDATE_COLOR',val:str})
        
    }
    render(){
        // 要实现点击变色； 需要给 两个分别绑定对应的事件
        return <div>
            <button onClick={()=>{this.change('blue')}} style={{color:this.props.color123}}>变蓝</button>
            <button onClick={()=>{this.change('red')}} style={{color:this.props.color123}}>变红</button>
        </div>
    }
}
Button = connect((state)=>{
    return{
        color123:state.color
    }
    // 我们就可以在Header组件中使用this.props.color
},(dispatch)=>{
    return{
        qqq:dispatch
    }
})(Button)
export default Button