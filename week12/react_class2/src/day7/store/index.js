// 放一个 createStore 执行
// import {createStore,combineReducers} from '../1_复习'
import {createStore,combineReducers} from 'redux'
import {reducer,countReducer} from './reducers'
// 合并reducer  我们使用 combineReducers函数；该函数可以把所有的 reducer合并成一个reducer
// 这个函数是由 redux 提供的 
let rootReducer = combineReducers({
    qqq:reducer,
    www:countReducer
})

// let store = createStore(reducer);
let store = createStore(rootReducer);
export default store