import axios from 'axios';
import router from '@/router/router.js'


// axios.defaults.baseURL = 'http://localhost:9000';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let obj = response.data;
    if(obj.errorCode == 1){
        //说明这个人登录状态过期
        //这时我们让他直接跳到登录页
        // window.location.href = '/login' // 有刷新页面
        router.push('/login') // 没刷新页面
    }
    return response.data; // 为了不用每一次都要书写data.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const getList = ()=>{
    // 请求列表数据
    return axios.get('/api/list')
}

// 登录请求
export const login = (params)=>{
    // 登录需要传递用户名和密码
    return axios.get('/api/login',{params:params})
}

// 删除请求
export const del = (params)=>{
    return axios.get('/api/del',{params:params})
}


// 新增或者修改数据的请求
export const add = (params)=>{
    // post 请求 第二个参数就是一个对象
    // get  请求 第二个参数也是一个对象 但是属性名必须是 params,对应的
    // 属性值 才是要传递的参数
    return axios.post('/api/add',params)
}