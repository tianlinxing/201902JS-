import React from 'react';
import Input from './input'
import List  from './list'

// import {Provider} from './react-redux'
import {Provider} from 'react-redux'
import store from './store/index'

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <Provider store={store}>
            <div className=''>
                <Input/>
                <List/>
            </div>
        </Provider>
    }
}

export default App