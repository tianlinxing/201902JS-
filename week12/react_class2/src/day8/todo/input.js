import React from 'react';
import * as actions from './store/actions'
// import {connect} from './react-redux'
import {connect} from 'react-redux'
class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            todo:''
        }
    }
    change(e){
        this.setState({
            todo:e.target.value
        })
    }
    submit(e){
        if(e.keyCode!==13)return;
        // 按回车键 要做的事情

        // 把 当前内容放到数组(redux中的数据)中
        // 通过执行action中的 add函数 结合 dispatch函数
        this.props.add(this.state.todo)

        // 清空 input
        this.setState({
            todo:''
        })
    }
    render() {
        let {todo} = this.state;
        return <div className=''>
            <input 
                value={todo} 
                onChange={(e)=>{this.change(e)}} 
                onKeyUp={(e)=>{this.submit(e)}}
                type="text" 
                placeholder='要做的事'/>
        </div>;
    }
}

Input = connect((state)=>{
    return {}
},actions)(Input)

export default Input