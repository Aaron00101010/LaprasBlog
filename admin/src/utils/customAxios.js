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
    Message.error({ message: '404:口也屎啦，跃迁至未知区域！' })
  } else if (err.response.status === 401) {
    Message.error({ message: '401:token校验已失败，重新登录已启动' })
    setTimeout(() => {
      window.location = '/'
    }, 1500)
  } else if (err.response.status === 500) {
    Message.error({
      message: '500:服务器又出错了，生意又不会做，只能写写bug维持生活的样子'
    })
  } else {
    Message.error({
      message: `${err.response.status}:it is a feature，not a bug，未知错误!`
    })
  }
  return Promise.reject(err)
})

export default customAxios
