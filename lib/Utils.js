class Utils {
  /**
   * url处理 根据协议添加http或者https
   * @param {String} url
   */
  urlHandle(url) {
    let protocol = "";
    protocol = document.location.protocol === "https:" ? "https://" : "http://";
    if (url) {
      return protocol + String(url).split("//")[1];
    }
    return "";
  }

  /**
   * 获取json长度
   * @param {object} jsonData
   */
  getJsonLength(jsonData) {
    let length = 0;
    /* eslint-disable */
    for (let key in jsonData) {
      length++;
    }
    return length;
  }

  /**
   * 内容超过某个长度 加...
   * @param  {string} value  截取的内容
   * @param  {number} length 截取的长度
   * @return {string} 返回截取后的字符串
   */
  getCutOutContent(value, length = 28) {
    if (value.toString().length >= length) {
      return value.substr(0, length) + "...";
    }
  }

  /**
   * 判断是否是空对象、空对象数组、空数组
   * @param  {mixed} object  被判断的对象或者对象数组
   * @return {Boolean}
   */
  isNullObject(object) {
    if (
      JSON.stringify(object) === "[{}]" ||
      JSON.stringify(object) === "{}" ||
      JSON.stringify(object) === "[]"
    ) {
      return true;
    }
    return false;
  }
}

export default Utils;
