import *as Types from './action-types'

export const  countRducer = (state={
    count:0
},action)=>{
    switch (action.type) {
        case Types.ADD:
            return{
                ...state,
                count:state.count + action.val
            }
        case Types.REMOVE:
            return {
                ...state,
                count:state.count - action.val
            }    
    
        default:
            return {
                ...state
            }
    }
}