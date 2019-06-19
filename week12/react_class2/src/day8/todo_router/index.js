import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './nav'
import Main from './main'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <Router>
            <div className=''>
                <Nav></Nav>
                <Main></Main>
            </div>
        </Router>
    }
}

export default App