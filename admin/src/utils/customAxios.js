import axios from 'axios'
import { Message } from 'element-ui'

const customAxios = axios.create({
  baseURL: 'http://localhost:8527'
})

customAxios.interceptors.request.use(config => {
  if (/\/api\//.test(config.url)) {
    config.headers.Authorization = `Bearer ${localStorage.elpsycongroo}`
  }
  return config
}, null)

customAxios.interceptors.response.use(null, err => {
  if (err.response.status === 404) {
    Message.error({ message: '服务器已瘫痪，进入自爆模式！' })
  } else if (err.response.status === 401) {
    Message.error({ message: 'token校验失败' })
  } else if (err.response.status === 500) {
    Message.error({ message: '服务器出错了！' })
  } else {
    Message.error({ message: '未知错误!' })
  }
  return Promise.reject(err)
})

export default customAxios
