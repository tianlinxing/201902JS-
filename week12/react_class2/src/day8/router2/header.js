import React from 'react';
import {NavLink} from 'react-router-dom'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            {/* 路由传参 
                1、search 传参 获取时 可以通过 this.props.location.search获取
                2、params 传参，这种传参方式，需要配合Route的path属性;获取时通过this.props.match.params
                3、隐式传参 把参数放到 state 中， 使用时，需要写成对象的方式；获取时通过this.props.location.state
            */}
            <NavLink to='/home?a=12'>首页</NavLink>
            <NavLink to='/list'>列表页</NavLink>
            <NavLink to='/list/666'>列表页2</NavLink>
            
            <NavLink to={{pathname:'/home',state:{a:12,id:13,name:123}}}>首页2</NavLink>
        
            <NavLink to='/home/son'>二级路由</NavLink>
        </div>;
    }
}

export default App