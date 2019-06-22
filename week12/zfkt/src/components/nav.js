import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import {Icon} from 'antd'
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
                    <Route path='/home' component={Home}></Route>
                    <Route path='/course' component={Course}></Route>
                    <Route path='/user' component={User}></Route>
                </Switch>
            </div>
            <div className='link_box'>
                <NavLink to='/home'>
                    <Icon type="home" />
                    首页
                </NavLink>
                <NavLink to='/course'>
                    <Icon type="book" />
                    课程中心
                </NavLink>
                <NavLink to='/user'>
                    <Icon type="user" />
                    用户中心
                </NavLink>
            </div>
        </div>;
    }
}

export default Nav