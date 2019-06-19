import React from 'react';
import {Route} from 'react-router-dom'
class App extends React.Component {
    constructor() {
        super(); 
    }
    goto(){
        setTimeout(() => {
            this.props.history.push('/list/123')
        }, 2000);
    }
    render() {
        console.log(this.props)
        return <div className=''>
            <button onClick={()=>{this.goto()}}>去列表</button>
            homes
            <Route path='/home/son' render={()=><h3>二级路由</h3>}></Route>
        </div>;
    }
}

export default App