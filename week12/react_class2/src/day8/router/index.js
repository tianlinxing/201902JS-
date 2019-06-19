import React from 'react';

// react使用 路由  需要引入对应组件
import {HashRouter,Route} from 'react-router-dom'
// Route 功能理解成  vue-router 的 router-view

import Home from './home'
import List from './list'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <HashRouter>
                <div>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                </div>
            </HashRouter>
        </div>;
    }
}

export default App