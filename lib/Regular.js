/**
 * @description 正则表达式
 * @author  yx
 */
export default class Regular {
  /**
   * @description 检查字符串有空格
   * @author  yx
   * @param  {string} value 要检验的值
   * @return {Boolean} 返回是否是true或false的值
   */
  hasSpace(value) {
    let reg = /\s/;
    return reg.test(value);
  }

  /**
   * @description 清空空格
   * @author  yx
   * @param  {string} value 要清空的值
   * @return {String}  返回被清空后的值
   */
  clearSpace(value) {
    try {
      return value.replace(/\s+/gi, "");
    } catch (err) {
      throw "Cannot read property 'clearSpace' of undefined";
    }
  }
}
