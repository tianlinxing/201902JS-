import React from 'react';
import {Route,Switch} from 'react-router-dom'

import Nav from './components/nav'
import Login from './components/login/index'

class App extends React.Component{
    //在该组件中  我们把 nav 和 login做成兄弟关系
    render(){
      return <div className='app_box'>
        <Switch>
          <Route path='/login' component={Login}></Route>
          {/* <Route path='/app' component={Nav}></Route> */}
          <Route path='/' component={Nav}></Route>
        </Switch>
      </div>
    }
}

export default App;
