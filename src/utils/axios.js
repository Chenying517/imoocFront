/**
 * 封装axios请求，返回重新封装的数据格式
 * 对错误的统一处理
 */
import axios from 'axios'
import errorHandle from './errorHandle'

class httpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }
  // 获取实例的配置
  getInsitConfig () {
    const config = {
      baseUrl: this.baseUrl,
      timeOut: 10000,
      headers: {
        Content_Type: 'application/json;charset=utf-8'
      }
    }
    return config
  }
  // 设定拦截器
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        // do something before request is send
        // console.log('config+' + config)

        return config
      },
      error => {
        // do somthing with request erroe
        errorHandle(error)
        return Promise.reject(error)
      }
    )
    // 响应请求拦截器
    instance.interceptors.response.use(
      res => {
        // Any status code that lie within   the rang of 2xx cause this function to trigger
        // do something with response ata
        // console.log('res is' + res)
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      error => {
        // Any status code that outside the rang of 2xx cause this function to trigger
        // do something with response error
        // debugger
        errorHandle(error)
        return Promise.reject(error)
      }
    )
  }
  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOption = Object.assign(this.getInsitConfig(), options)
    this.interceptors(instance)
    return instance(newOption)
  }
  // get 方法
  get (url, config) {
    const option = Object.assign(
      {
        method: 'get',
        url: url
      },
      config
    )

    return this.request(option)
  }
  post (url, data) {
    return (
      this,
      this.request({
        method: 'post',
        url: url,
        data: data
      })
    )
  }
}

export default httpRequest
