function createStore(reducer) {
    let state;
    const getState = ()=>{return state};
    let listener = [];
    const subscribe = (f) => {
        listener.push(f);
        return () => {
            listener = listener.filter(item=>f!==item)
        }
    }
    const dispatch = (action) => {
        state = reducer(state,action);
        listener.forEach(item=>{
            item&&item()
        })
    }
    dispatch({});
    return {
        getState,dispatch,subscribe
    }
}
function combineReducers(reducers){
    //reducers 是一个对象
    // 对象中存储的是 每一个的reducer
    let obj = {};
    return (state={},action)=>{
        //  该箭头函数对应的就是 rootReducer
        //  那他的返回值是 一个对象
        for(let key in reducers){
            // obj[key] 给obj新增一个属性
            // reducers[key] 是每一个reducer
            // 每一个reducer都是可以执行的；
            // 执行的时候需要自己的state和action
            // state[key]
            obj[key] = reducers[key](state[key],action)
        }
        return obj
    }
}
export {createStore,combineReducers}