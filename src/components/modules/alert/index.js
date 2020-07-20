import AlertComponent from './Alert.vue'

// 初始化ALert
const Alert = {}

Alert.install = function (Vue) {
  const AlertConstructor = Vue.extend(AlertComponent)
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // alert 弹出框
  Vue.prototype.$alert = function (msg) {
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = true
  }

  // confirm 弹出框
  Vue.prototype.$confirm = function (msg, success, cancal) {
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = true

    if (typeof success !== 'undefined') {
      instance.success = success
    }
    if (typeof cancal !== 'undefined') {
      instance.cancal = cancal
    }
  }
}

export default Alert
