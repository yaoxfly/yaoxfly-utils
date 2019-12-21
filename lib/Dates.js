/**
 * @description 日期、时间处理类
 * @author  yx
 */
export default class Dates {
  /**
   * @description 时间搓转换为date
   * @author  yx
   * @param {number} timeStamp
   * @return {String} 返回转换后的时间
   */
  timeStampToDate(timeStamp) {
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
   * @description 时间搓转换为dateTime
   * @author  yx
   * @param {number} timeStamp
   * @return {String} 返回转换后的时间
   */

  timeStampToDateTime(timeStamp) {
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
   * @description 时间搓转换为昨天 刚刚 几分钟前等
   * @author  yx
   * @param {String} timeStamp
   *@return {String} 返回转换后的时间
   */

  timestampFormat(timestamp) {
    timestamp =
      timestamp.toString().length == 13
        ? parseInt(`${timestamp / 1000}`)
        : timestamp;
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
      s = tmDate.getSeconds();

    if (timestampDiff < 60) {
      // 一分钟以内
      return "刚刚";
    } else if (timestampDiff < 3600) {
      // 一小时前之内
      return `${Math.floor(timestampDiff / 60)}分钟前`;
    } else if (
      curDate.getFullYear() == Y &&
      curDate.getMonth() + 1 == m &&
      curDate.getDate() == d
    ) {
      return `今天${zeroize(H)}:${zeroize(i)}`;
    } else {
      let newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
      if (
        newDate.getFullYear() == Y &&
        newDate.getMonth() + 1 == m &&
        newDate.getDate() == d
      ) {
        return `昨天${zeroize(H)}:${zeroize(i)}`;
      } else if (curDate.getFullYear() == Y) {
        return `${zeroize(m)}-${zeroize(d)} ${zeroize(H)}:${zeroize(i)}`;
      } else {
        return `${Y} -
          ${zeroize(m)}-
          ${zeroize(d)}-
          ${zeroize(H)}: 
          ${zeroize(i)}`;
      }
    }
  }
}
