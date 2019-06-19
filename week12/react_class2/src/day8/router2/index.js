import React from 'react';
import Home from './home'
import List from './list'
import Main from './main'

import {Route,BrowserRouter,Redirect,Switch} from 'react-router-dom'
//Redirect  重定向组件
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <BrowserRouter>
            <div className=''>
                <Main>
                    <Switch>
                        {/* Switch 作用 就是 匹配到路径之后， 不再向下匹配  */}
                        {/* 行内属性 exact 精确匹配 */}
                        <Route path='/' exact render={()=><h1>hello</h1>}></Route>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/list/:id' component={List}></Route>
                        {/* <Redirect to='/home'></Redirect> */}

                        <Route path='/list2' render={()=>{
                            // router 也支持写  render函数 里边写一个函数，走到该路径时
                            // 渲染的内容 就是render对应函数的返回结果
                            return <List></List>
                        }}></Route>

                        {/* <Route path='/' render={()=>{
                            return <Redirect to='/home'></Redirect>
                        }}></Route> */}
                        
                        {/* 不管是 Redirect 还是  404处理 都是放到了 最下边 */}
                        <Route render={()=><h2>404</h2>}></Route>
                    </Switch>
                </Main>
            </div>
        </BrowserRouter>
    }
}

export default App