import * as Types from '../action-types'
const initState = {
    ary:[]
}
export const sliderReducer = (state=initState,action)=>{
    
    switch(action.type){
        case Types.INIT_SLIDER:
            return {
                ...state,
                ary:action.val
            }
        default:
            return{
                ...state
            }    
    }
}