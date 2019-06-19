export function createStore(reducer){
    let state;
    const getState = ()=>{return state};
    let listener = [];
    const subscribe = (f)=>{
        listener.push(f);
        return ()=>{
            listener = listener.filter((item)=>{
                return item !== f
            })
        }
    }
    const dispatch = (action) => {
        state = reducer(state,action);
        listener.forEach(item=>{
            item&&item()
        })
    }
    dispatch({})
    return {
        getState,dispatch,subscribe
    }
}

export function combineReducers(reducers) {
    let obj = {};
    return (state={},action)=>{
        for(let key in reducers){
            obj[key] = reducers[key](state[key],action)
        }
        return obj
    }
}