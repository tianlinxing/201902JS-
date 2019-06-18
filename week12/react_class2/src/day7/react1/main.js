import React,{Component} from 'react'

import {connect} from '../react_redux/react_redux2'
import Button from './button'
class Main extends Component{
    render(){
        return <div>
            <h3 style={{color:this.props.color123}}>这是内容部分</h3>
            <Button/>
        </div>
    }
}
Main = connect((state)=>{
    return{
        color123:state.color
    }
    // 我们就可以在Header组件中使用this.props.color
},()=>{})(Main)
export default Main