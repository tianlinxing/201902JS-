import {createStore,combineReducers,applyMiddleware} from 'redux'

import reduxThunk from 'redux-thunk'
import { countRducer } from './reducers/reducers.js';
import { sliderReducer } from './reducers/sliderReducer';
import { listReducer } from './reducers/listReducer';

let rootRecuder = combineReducers({
    count:countRducer,
    sliderAry:sliderReducer,
    listAry:listReducer
}) 


// 创建store
let store = createStore(rootRecuder,applyMiddleware(reduxThunk))

export default store