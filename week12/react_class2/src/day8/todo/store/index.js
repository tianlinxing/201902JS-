// 创建 store

// import {createStore,combineReducers} from '../redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'


import {todoReducer} from './reducers'

// 使用 该函数 去合并各个reducer
let rootReducer = combineReducers({
    todo:todoReducer
})

//根据 根reducer 去产生 store
// redux 可以让我们使用 中间件 ；中间件 都是需要下载的
// 使用方式  是 applyMiddleware(中间件1,中间2)；放到 createStore的第二个参数
// redux-thunk中间件的作用就是 action中的函数的返回值除了可以是对象 还可以是函数
let store = createStore(rootReducer,applyMiddleware(reduxThunk));
export default store;