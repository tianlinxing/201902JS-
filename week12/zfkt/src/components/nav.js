import React from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import {Icon} from 'antd'
import '../less/nav.less'
import Home from './home/index'
import Course from './course/index'
import User from './user/index'
class Nav extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='box'>
            <div className='content_box'>
                <Switch>
                    <Route path='/' exact render={()=>{
                        // 进来之后重新顶向到 /home 路径
                        return <Redirect to='/home'></Redirect>
                    }}></Route>
                    {/* <Redirect path='/' to='/home' exact></Redirect> */}
                    <Route path='/home' component={Home}></Route>
                    <Route path='/course' component={Course}></Route>
                    <Route path='/user' component={User}></Route>
                </Switch>
            </div>
            <div className='link_box'>
                <NavLink to='/home'>
                    <div><Icon type="home" /></div>
                    <div>首页</div>
                </NavLink>
                <NavLink to='/course'>
                    <div><Icon type="book" /></div>
                    <div>课程中心</div>
                </NavLink>
                <NavLink to='/user'>
                    <div><Icon type="user" /></div>
                    <div>用户中心</div>
                </NavLink>
            </div>
        </div>;
    }
}

export default Nav