import * as Types from './action-types'

// reducer有两个功能 一个给初始值；一个修改值
export const todoReducer = (state={
    ary:[]
},action)=>{
    switch (action.type) {
        case Types.ADD:
            return {
                ...state,
                ary:state.ary.concat(action.val)
            }
        case Types.REMOVE:
            return {
                ...state,
                ary:state.ary.filter((item,index)=>index!==action.val)
            }    
        default:
            return {
                ...state
            }
    }
}