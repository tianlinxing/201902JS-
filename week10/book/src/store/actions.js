import axios from 'axios'
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bf0ee68643497494c87d289';
// export const addFn= (context,options)=>{

// }
export const addFn= ({commit},options)=>{
    setTimeout(() => {
        commit('add',options)// 触发 mutations中的 add 函数；
    }, 1000);
}

export const getBanner = ({commit},options)=>{
    // return axios.get('/bannerList')
    // 把请求好的数据方法vuex的state中；
    axios.get('/api/bannerList').then((data)=>{
        // data.data 时候穿过来的数据
        commit('changeBanner',data.data)
    })
}
export const getHomeList = ()=>{
    // 调取 首页 下 的  列表数据
    return axios.get('/api/homeList')
}

// 获取列表页的初始数据
export const getListData = ({commit})=>{
    axios.get('/api/listData').then((data)=>{
        commit('changeList',data.data);// 触发mutations中的函数
    })
}