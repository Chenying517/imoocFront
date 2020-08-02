/**
 * 在全局状态下引用几个常用的validate
 */

import { extend, localize } from 'vee-validate' //  extend 主要是扩展官方的规则
import { required, email, min, max, length, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)
extend('length', length)
extend('confirmed', confirmed)

localize('zh-Ch', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码',
    email: '邮箱'
  },
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}!!!'
    }
  }
})
