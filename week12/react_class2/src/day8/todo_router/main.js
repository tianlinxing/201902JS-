import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Add from './add'
import Show from './show'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <Switch>
                <Redirect path='/' exact  to='/change'></Redirect>
                {/* <Route path='/' exact render={()=>{
                    return <Redirect to='/change'></Redirect>
                }}></Route> */}
                <Route path='/change' component={Add}></Route>
                <Route path='/show/' component={Show}></Route>

                <Route render={()=>{
                    return <h2>404</h2>
                }}></Route>
            </Switch>
        </div>;
    }
}

export default App