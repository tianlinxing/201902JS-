import React from 'react'
import Header from './header'
import Main from './main'

import {Provider} from '../react_redux/react_redux2'

import {createStore} from '../1_复习'
function reducer(state={color:'red'},action){
    switch (action.type) {
        case "UPDATE_COLOR":
            return {
                ...state,
                color:action.val
            }
    
        default:
            return{
                ...state
            }
    }
}
let store = createStore(reducer);
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a:100
        }
    }
    
    render() {
        return <Provider store={store}>
            <div className=''>
                <Header className='www'/>
                <Main/>
            </div>
        </Provider>
    }
}

export default App