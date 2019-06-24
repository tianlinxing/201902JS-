import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8000';

export const login = (obj)=>{
    return axios.post('/login',obj)
}

export const reg = (obj)=>{
    return axios.post('/reg',obj)
}