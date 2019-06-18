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
export {createStore}