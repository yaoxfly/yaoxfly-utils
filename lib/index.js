import Utils from "./Utils";
import Uni from "./Uni";
/* eslint-disable */
// 以数组的结构保存组件，便于遍历
const tool = [Utils, Uni]
// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册
  tool.forEach(item => {
    Vue.prototype[item.className] = item
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...tool
}
