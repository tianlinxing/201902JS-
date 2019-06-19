import React from 'react';

// react使用 路由  需要引入对应组件
import {HashRouter,Route,BrowserRouter,Link,NavLink} from 'react-router-dom'
// Route 功能理解成  vue-router 的 router-view
// HashRouter 相当于 vue-router 的  mode = hash
// BrowserRouter 相当于 vue-router 的  mode = history
// HashRouter BrowserRouter 两个组件 都有一个 basename 是用来设置基础路径的
//                          这两个组件  老版都只能包含一个根元素

// Link 相当于 vue-router 的 router-link
// NavLink 相当于 可以加类名的 router-link

// 通过 路由渲染的组件  都会添加三个属性 
// history 可以理解成 vue-router 的 $router;放置了一些跳转方法
// match   可以理解成 vue-router 的 $route; 放置了一些属性

import Home from './home'
import List from './list'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <HashRouter basename='/myPro'>
                <div>
                    <Link to='/home'>首页</Link>
                    <Link to='/list' title='列表' className='lie'>列表页</Link>

                    <NavLink to='/home' activeClassName='current'>首页</NavLink>
                    <NavLink to='/list' activeClassName='current'>列表页</NavLink>

                    <Link to={{pathname:'/home'}}>首页</Link>

                    <Route path='/home' component={Home}></Route>
                    {/* 当路径走到 /home 时 渲染 Home 组件 */}
                    <Route path='/list' component={List}></Route>

                </div>
            </HashRouter>
        </div>;
    }
}

export default App