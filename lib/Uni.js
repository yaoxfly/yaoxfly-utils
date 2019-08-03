/* eslint-disable */
//针对uni框架的各种方法的封装
import Config from './Config'
class Uni {
  static className = `${Config.prefixName}Uni`
  /**
   * 返回
   * @param {Number} delta 返回层级 必须大于1
   * @param {Number} time 返回时间
   * @return {Object} 返回请求结果
   */
  static back(delta = 1, time = 1000) {
    setTimeout(() => {
      uni.navigateBack({
        delta: delta
      })
    }, time)
  }

  /**
   * 显示消息框
   * @param {String} title 标题
   * @param {Number} time 时间 1500-10000
   * @return {Object} 返回请求结果
   */
  static showToast(title, time = 1500, icon = 'none', mask = true) {
    setTimeout(() => {
      //防止loading关闭瞬时把showToast也关闭掉
      uni.showToast({
        title: title,
        icon: icon,
        mask: mask,
        duration: time
      })
    }, 200)
  }

  /**
   * 路由跳转  接收参数 用  JSON.parse(option.urlParamObj) 带返回箭头的封装
   * @param {String} url 路由
   * @param {Object} urlParamObj 跳转带的参数
   * @param {String} time 延时跳转时间 默认0瞬跳
   * @return {Object} 返回请求结果
   */
  static navigateTo(url, urlParamObj = '', time = 0) {
    setTimeout(() => {
      uni.navigateTo({
        url: urlParamObj
          ? `${url}?urlParamObj=${JSON.stringify(urlParamObj)}`
          : `${url}`
      })
    }, time)
  }

  /**
   * 关闭当前页面，跳转到应用内的某个页面  接收参数 用  JSON.parse(option.urlParamObj) 带返回箭头的封装
   * @param {String} url 路由
   * @param {Object} 参数
   * @return {Object} 返回请求结果
   */

  static redirectTo(url, urlParamObj = '', time = 0) {
    setTimeout(() => {
      uni.redirectTo({
        url: urlParamObj
          ? `${url}?urlParamObj=${JSON.stringify(urlParamObj)}`
          : `${url}`
      })
    }, time)
  }

  /**
   * 关闭所有页面，打开到应用内的某个页面  接收参数 用  JSON.parse(option.urlParamObj) 带返回箭头的封装
   * @param {String} url 路由
   * @param {Object} 参数
   * @return {Object} 返回请求结果
   */

  static reLaunch(url, urlParamObj = '') {
    uni.reLaunch({
      url: urlParamObj
        ? `${url}?urlParamObj=${JSON.stringify(urlParamObj)}`
        : `${url}`
    })
  }

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 不能带参数
   * @param {String} url 路由
   * @param {Object} 参数
   * @return {Object} 返回请求结果
   */

  static switchTab(url) {
    uni.switchTab({
      url: url
    })
  }

  /**
   * 重新加载 接收参数 用  JSON.parse(option.urlParamObj)
   * @param {String} url 路由
   * @param {Object}  urlParamObj 参数
   * @return {Object} 返回请求结果
   */

  static reload(urlParamObj = '') {
    let pages = getCurrentPages() //获取加载过的路由
    let currPage = pages[pages.length - 1] //获取当前页路由
    let url = currPage.route.split('/')[currPage.route.split('/').length - 1]
    console.log(url)
    uni.redirectTo({
      url: urlParamObj
        ? `${url}?urlParamObj=${JSON.stringify(urlParamObj)}`
        : `${url}`
    })
  }

  /**
   * 获取当前域名 //兼容旧版本的工程使用-主要为了跳转到旧版本页面
   * @return {String} 返回地址
   */
  static getCurrentDomainName() {
    return process.env.NODE_ENV === 'development'
      ? 'http://alexxj.mralex.cn'
      : window.location.protocol + '//' + window.location.host
  }
}

Uni.install = function(Vue) {
  Vue.prototype[Uni.className] = Uni
}
export default Uni
