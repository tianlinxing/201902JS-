import * as Types from '../action-types'

const initState = {
    ary:[],
    type:'all'
}
export const listReducer = (state = initState,action)=>{
   
    switch (action.type) {
        case Types.GET_LIST:
            return {
                ...state,
                ary:state.ary.concat(action.val)
            } 
        case Types.CHANGE_LIST:
            return {
                ...state,
                ary:action.val
            }    
        case Types.LIST_TYPE:
            return {
                ...state,
                type:action.val
            }    
        default:
            return {
                ...state
            }
    }
}