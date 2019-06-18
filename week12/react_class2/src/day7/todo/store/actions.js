import * as Types from './action-types'
export const add = (val)=>{
    return {
        type:Types.ADD,
        val:val
    }
}
export const remove = (val)=>{
    return {
        type:Types.REMOVE,
        val:val
    }
}