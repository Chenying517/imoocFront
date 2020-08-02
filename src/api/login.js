import axios from '@/utils/request'

/**
 * 验证码
 * params () option 用户的唯一凭证
 */
const getCode = (option) => {
  return axios.get('./public/getCaptcha', {
    params: {
      sid: option
    }
  })
}

/**
 * 忘记密码
 * params () option 用户信息
 */
const forget = (option) => {
  return axios.post('/forget', {
    ...option
  })
}

/**
 * 登录
 * params () option 登录请求用户信息
 */
const login = (option) => {
  return axios.post('./login/login', {
    ...option
  })
}
/**
 * 注册
 * params () option 登录请求用户注册信息
 */
const register = (option) => {
  return axios.post('./login/register', {
    ...option
  })
}
export { getCode, forget, login, register }
