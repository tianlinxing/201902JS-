// export default {
//     //...
// }
// export const add = ()=>{

// }
// export let add = ()=>{
    
// }
// export var add = ()=>{
    
// }
export function add(state,options){
    state.count++;
}
export function remove(state,options){
    state.count--;
}

export function changeBanner(state,options){
    // 改变 state中的  bannerList 数据
    state.bannerList = options;
}