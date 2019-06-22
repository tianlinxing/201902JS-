import {createStore,combineReducers,applyMiddleware} from 'redux'

import reduxThunk from 'redux-thunk'
import { countRducer } from './reducers';

let rootRecuder = combineReducers({
    count:countRducer
}) 


// 创建store
let store = createStore(rootRecuder,applyMiddleware(reduxThunk))

export default store