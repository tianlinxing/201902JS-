import * as Types from '../action-types'
import {getSlider, getList} from '../../api/home.js'
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

export const initSlider = () => {
    return (dispatch,getState)=>{
        // 一般异步的情况 会使用 返回一个函数的形势
        getSlider().then((data)=>{
            console.log(data.data)
            dispatch({
                type:Types.INIT_SLIDER,
                val:data.data
            })
        })
    }
}

// 获取列表的函数
export const initList = (type,n)=>{
    // type 使用用来告诉我们 要请求那个接口的 有三个值
    // 分别是  all   vue   react
    return (dispatch,getState)=>{
        dispatch({
            // 修改 type 类型
            type:Types.LIST_TYPE,
            val:type
        })
        getList(type).then((data)=>{
            // 执行修改 list 还是拼接list 取决于 
            // 我们是点击执行的该函数 还是 滚动执行的该函数
            // 点击执行的该函数 我们就要去 修改list
            // 滚动执行的 我们 就要 拼接list
            // 我们增加参数 n  n==1 就是点击 
            if(n==1){
                dispatch({
                    type:Types.CHANGE_LIST,
                    val:data.data.list
                })
            }else{
                dispatch({
                    type:Types.GET_LIST,
                    val:data.data.list
                })
            }
            
        })
    }
}