import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8000'

export const getSlider = ()=>{
    return axios.get('/getSliders')
}

export const getList = (type)=>{
    return axios.get('/getLessons/'+type)
}