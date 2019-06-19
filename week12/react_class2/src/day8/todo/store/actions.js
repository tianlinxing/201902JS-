import * as Types from './action-types'
export const add = (val)=>{
    // return {
    //     type: Types.ADD,
    //     val:val
    // }
    return (dispatch,getState)=>{
        setTimeout(() => {
            dispatch({
                type: Types.ADD,
                val:val
            })
        }, 2000);
    }
}

export const remove = (val) => {
    return {
        type: Types.REMOVE,
        val:val
    }
}