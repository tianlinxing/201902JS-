import React,{Component} from 'react'

// import {connect} from '../react_redux/react_redux2'
import {connect} from 'react-redux'
import Button from './button'
class Main extends Component{
    render(){
        let {color123,count123} = this.props;
        return <div>
            <h3 style={{color:color123}}>这是内容部分</h3>
            <h2>数字是{count123}；是个{count123%2 ? '奇数' : '偶数'}</h2>
            <h2>count2是{}</h2>
            <Button/>
        </div>
    }
}
Main = connect((state)=>{
    return{
        color123:state.qqq.color,
        count123:state.qqq.count,

    }
    // 我们就可以在Header组件中使用this.props.color
},()=>{
    return{
        
    }
})(Main)
export default Main