import * as Types from './action-types'
export function todoReducer(state={
    ary:[]
},action) {
    switch (action.type) {
        case Types.ADD:
            return {
                ...state,
                ary:state.ary.concat(action.val)
            }
        case Types.REMOVE:
            return {
                ...state,
                ary:state.ary.filter(item=>item!==action.val)
            }    
        default:
            return{
                ...state
            }
    }
}