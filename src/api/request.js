import axios from 'axios'
import nProgress from 'nprogress';
import "nprogress/nprogress.css"
import store from '@/store'

const requests = axios.create({
    // 配置对象
    baseURL: "/api",
    timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    // config：配置对象
    // token
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    nProgress.start();
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('fail'))
})
export default requests;