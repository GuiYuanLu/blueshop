import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 8000
})

// 请求拦截器
request.interceptors.request.use(
  (config) => config,
  (e) => Promise.reject(e)
)

// 响应拦截器

request.interceptors.response.use(
  (result) => result.data,
  (e) => Promise.reject(e)
)

export default request
