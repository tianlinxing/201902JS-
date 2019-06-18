import React,{Component} from 'react'

import {connect} from '../react_redux/react_redux2'
class Header extends Component{
    componentDidMount(){
        console.log(this.context)
        console.log(this.props)
    }
    render(){
        return <div>
            <h2 style={{color:this.props.color123}}>这是头部</h2>
        </div>
    }
}
Header = connect((state)=>{
    return{
        color123:state.color
    }
    // 我们就可以在Header组件中使用this.props.color
},()=>{})(Header)

export default Header