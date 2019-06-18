import {createStore,combineReducers} from 'redux'

import {todoReducer} from './reducers'

let rootReducer = combineReducers({
    todoAry:todoReducer
})
let store = createStore(rootReducer)