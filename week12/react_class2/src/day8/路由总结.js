import {BrowserRouter,HashRouter} from 'react-router-dom'
// 两个盒子的行内属性 basename 是用来设置基础路径的
// BrowserRouter  history; HashRouter  hash

import {Route} from 'react-router-dom'
// Route 相当于 vue-router 的 router-view 组件
// 行内属性 
//      path 指定要去匹配的路径  
//      component 执行匹配路径对应的 组件
//      render 后跟一个函数，类似于component 最终渲染的是 函数的返回值
//      exact 精确匹配路径使用的行内属性

import {Link,NavLink} from 'reat-router-dom'
// 这两个组件 相当于 vue-router 的 router-link 组件
// Link,NavLink 区别 NavLink 有对应的类名
//      就是用来实现跳转的按钮，
// 用法  行内属性
// to 后可以跟字符串(要跳转的路径) 也可以跟一个对象{pathname:}
// activeClassName 用来设置对应的类名的 默认是 active
// className 用来设置类名的

import {Switch} from 'react-router-dom'
//  该组件实现了  当匹配到某一个路径之后 不再向下匹配

//路由传参
//1、search  to='/home?a=12&b=14' to={{pathname:'/home',search:'?a=12'}}  获取 this.props.location.search
//2、params  path='/home/:id'  to='/list/666'  获取 this.props.match.params  
//3、隐式传参  to={{pathname:'/home',state:{a:12,b:13}}} 获取  this.props.location.state

// 编程式导航
// this.props.history.push  this.props.history.replace 
