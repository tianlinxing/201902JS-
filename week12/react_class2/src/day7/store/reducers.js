// 放一些 reducer 函数
import * as Types from './action-types'
export function reducer(state={
    color:'red',
    count:100
},action){
    switch (action.type) {
    
        case Types.UPDATECOLOR:
            return {
                ...state,
                color:action.val
            }
        case Types.CHNAGECOUNT:
            return {
                ...state,
                count:state.count + action.num
            }
        default:
            return{
                ...state
            }
    }
}

export function countReducer(state={
    count2:1000
},action){
    switch (action.type) {
        // case "UPDATE_COUNT"
        case Types.ADD:
            return {
                ...state,
                count2:state.count2 + action.val
            }
        case Types.REMOVE:
            return {
                ...state,
                count2:state.count2 - action.val
            }    
        default:
            return {
                ...state
            }
    }
}