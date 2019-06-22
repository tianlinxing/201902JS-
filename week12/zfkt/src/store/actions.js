import * as Types from './action-types'
export const add = (n)=>{
    // 同步书写方式
    return {
        type:Types.ADD,
        val:n
    }
}
export const remove = (n)=>{
    // 异步书写方式
    return (dispatch,getState)=>{
        setTimeout(() => {
            dispatch({
                type:Types.REMOVE,
                val:n
            })
        }, 2000);
    }
}