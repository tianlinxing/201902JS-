import React from 'react';
import {NavLink} from 'react-router-dom'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <NavLink to='/change'>添加数据</NavLink>
            <NavLink to='/show'>展示数据</NavLink>
        </div>;
    }
}

export default App