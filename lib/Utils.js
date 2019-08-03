import Config from "./Config";
class Utils {
  //不能定义为name 会出现诡异的bug 不会出现$符号等
  static className = `${Config.prefixName}Utils`;
  /**
   * 测试
   */
  static test() {
    alert(1);
  }
  /**
   * url处理 根据协议添加http或者https
   * @param {String} url
   */
  static urlHandle(url) {
    let protocol = "";
    // #ifdef  H5
    protocol = document.location.protocol === "https:" ? "https://" : "http://";
    // #endif
    // #ifdef  MP-WEIXIN
    protocol = "https://";
    // #endif
    if (url) {
      return protocol + String(url).split("//")[1];
    }
    return "";
  }
  /**
   *时间搓转换为date
   * @param {String} timeStamp
   */
  static timeStampToDate(timeStamp) {
    timeStamp =
      timeStamp.toString().length == 10
        ? parseInt(`${timeStamp}000`)
        : timeStamp;
    let d = new Date(timeStamp); //根据时间戳生成的时间对象
    let year = d.getFullYear();
    let month =
      d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
    let date = d.getDate() + 1 > 9 ? d.getDate() : "0" + d.getDate();
    return year + "-" + month + "-" + date;
  }

  /**
   * 时间搓转换为dateTime
   * @param {String} timeStamp
   */
  static timeStampToDateTime(timeStamp) {
    timeStamp =
      timeStamp.toString().length == 10
        ? parseInt(`${timeStamp}000`)
        : timeStamp;

    let d = new Date(timeStamp); //根据时间戳生成的时间对象 这里的时间搓 是13位
    let year = d.getFullYear();
    let month =
      d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
    let date = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
    let hours = d.getHours() > 9 ? d.getHours() : "0" + d.getHours();
    let minutes = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
    let seconds = d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds();

    return (
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  }

  /**
   * 时间搓转换为昨天 刚刚 几分钟前等
   * @param {String} timeStamp
   */
  static timestampFormat(timestamp) {
    //补零
    function zeroize(num) {
      return (String(num).length == 1 ? "0" : "") + num;
    }

    let curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    let timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    let curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    let tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

    let Y = tmDate.getFullYear(),
      m = tmDate.getMonth() + 1,
      d = tmDate.getDate();
    let H = tmDate.getHours(),
      i = tmDate.getMinutes(),
      /* eslint-disable */
      s = tmDate.getSeconds()

    if (timestampDiff < 60) {
      // 一分钟以内
      return '刚刚'
    } else if (timestampDiff < 3600) {
      // 一小时前之内
      return `${Math.floor(timestampDiff / 60)}分钟前`
    } else if (
      curDate.getFullYear() == Y &&
      curDate.getMonth() + 1 == m &&
      curDate.getDate() == d
    ) {
      return `今天${zeroize(H)}:${zeroize(i)}`
    } else {
      let newDate = new Date((curTimestamp - 86400) * 1000) // 参数中的时间戳加一天转换成的日期对象
      if (
        newDate.getFullYear() == Y &&
        newDate.getMonth() + 1 == m &&
        newDate.getDate() == d
      ) {
        return `昨天${zeroize(H)}:${zeroize(i)}`
      } else if (curDate.getFullYear() == Y) {
        return `${zeroize(m)}-${zeroize(d)}-${zeroize(H)}:${zeroize(i)}`
      } else {
        return `${Y} -
          ${zeroize(m)}-
          ${zeroize(d)}-
          ${zeroize(H)}: 
          ${zeroize(i)}`
      }
    }
  }

  /**
   * 获取json长度
   * @param {object} jsonData
   */
  static getJsonLength(jsonData) {
    let length = 0
    /* eslint-disable */
    for (let key in jsonData) {
      length++
    }
    return length
  }

  /**
   * 内容超过某个长度 加...
   * @param  {string} value  截取的内容
   * @param  {number} length 截取的长度
   * @return {string} 返回截取后的字符串
   */
  static getCutOutContent(value, length = 28) {
    if (value.toString().length >= length) {
      return value.substr(0, length) + '...'
    }
  }

  /**
   * 判断是否是空对象、空对象数组、空数组
   * @param  {mixed} object  被判断的对象或者对象数组
   * @return {Boolean}
   */
  static isNullObject(object) {
    if (
      JSON.stringify(object) === '[{}]' ||
      JSON.stringify(object) === '{}' ||
      JSON.stringify(object) === '[]'
    ) {
      return true
    }
    return false
  }

  /**
   *blob转base64并压缩
   * @param  {String} imgUrl  图片路径blob格式的
   * @return {String}
   */
  static blobToBase64(imgUrl) {
    return new Promise(resolve => {
      window.URL = window.URL || window.webkitURL
      const xhr = new XMLHttpRequest()
      xhr.open('get', imgUrl, true)
      // 至关重要
      xhr.responseType = 'blob'
      xhr.onload = function() {
        if (this.status == 200) {
          //得到一个blob对象
          const blob = this.response
          const imgType = blob.type
          const quality = 0.8 //图像质量
          // 至关重要
          const oFileReader = new FileReader()
          oFileReader.readAsDataURL(blob)
          oFileReader.onloadend = function(e) {
            let base64 = e.target.result
            // 创建图片对象
            let img = new Image()
            // 用图片对象加载读入的base64
            img.src = base64
            img.onload = function() {
              let width = this.width //图像大小 兼容ios 宽度不能超过3000
              if (width > 1000) {
                width = 1000
              }
              let hight = width * (this.height / this.width)
              let canvas = document.createElement('canvas')
              let ctx = canvas.getContext('2d')
              canvas.setAttribute('width', width)
              canvas.setAttribute('height', hight)
              // 将图片画入canvas\
              ctx.drawImage(this, 0, 0, width, hight)
              // 压缩到指定体积以下（M）
              base64 = canvas.toDataURL(imgType, quality)
              resolve(base64) // 在外部函数中获取这个值
            }
          }
        }
      }
      xhr.send()
    })
  }
}

Utils.install = function(Vue) {
  Vue.prototype[Utils.className] = Utils
}

export default Utils
