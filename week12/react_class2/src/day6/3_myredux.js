// redux 给我们提供了一个 createStore 函数
// createStore函数 接收 一个 reducer函数(纯函数) 作为实参
// reducer函数 接收两个参数 state action
// 我们自己需要在 reducer函数中 给state 赋初始值（es6 形参赋初始值，if判断）


// createStore 源码
function createStore(reducer){
    // 函数 接受一个 reducer函数； reducer函数有两个形参 state action
    // createStore函数的返回值 是一个 对象； 我们第一次写createStore时
    // 里边有两个函数  getState  dispatch ; 
    // getState 是 返回新的 state; dispatch 是为了 修改state
    // createStore 是把这两个函数返出去了
    // 下一步为了不用每次都重新写render,我们创造了一个 subscribe函数
    // 该函数 就是 把传进来的事件 放到事件池中；返回值 是一个新函数，可以把事件再从事件池中移除
    // 事件池中的事件 什么时候执行  我们是在 dispatch的时候执行
    // 初始化 state；
    let state;
    const getState = ()=>{return state};
    let listener = [];// 事件池
    const subscribe = (f) => {
        // 订阅事件
        listener.push(f);
        return ()=>{
            listener = listener.filter(item=>f!==item)
        }
    }
    const dispatch = (action)=>{
        state = reducer(state,action);
        listener.forEach(item=>{
            item&&item()
        })
    }
    dispatch({})// 初始化state;
    return {
        getState,subscribe,dispatch
    }
}

export default createStore
