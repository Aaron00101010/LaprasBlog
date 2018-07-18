import axios from 'axios'
import { apiServer } from '@/config/config'

const customAxios = axios.create({
  baseURL: apiServer
})

customAxios.interceptors.response.use(null, err => {
  if (err.response.status === 404) {
    console.log({ message: '404:口也屎啦，跃迁至未知区域！' })
  } else if (err.response.status === 500) {
    console.log({
      message: '500:服务器又出错了，生意又不会做，只能写写bug维持生活的样子'
    })
  } else {
    console.log({
      message: `${err.response.status}:it is a feature，not a bug，未知错误!`
    })
  }
  return Promise.reject(err)
})

export default customAxios
