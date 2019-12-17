/**
 * @description 图片处理类
 * @author  yx
 */
export default class Img {
  /**
   *blob转base64并压缩
   * @param  {String} imgUrl  图片路径blob格式的
   * @return {String} 回调出base64的路径
   */
  blobToBase64(imgUrl) {
    return new Promise(resolve => {
      window.URL = window.URL || window.webkitURL;
      const xhr = new XMLHttpRequest();
      xhr.open("get", imgUrl, true);
      // 至关重要
      xhr.responseType = "blob";
      xhr.onload = function() {
        if (this.status == 200) {
          //得到一个blob对象
          const blob = this.response;
          const imgType = blob.type;
          const quality = 0.8; //图像质量
          // 至关重要
          const oFileReader = new FileReader();
          oFileReader.readAsDataURL(blob);
          oFileReader.onloadend = function(e) {
            let base64 = e.target.result;
            // 创建图片对象
            let img = new Image();
            // 用图片对象加载读入的base64
            img.src = base64;
            img.onload = function() {
              let width = this.width; //图像大小 兼容ios 宽度不能超过3000
              if (width > 1000) {
                width = 1000;
              }
              let hight = width * (this.height / this.width);
              let canvas = document.createElement("canvas");
              let ctx = canvas.getContext("2d");
              canvas.setAttribute("width", width);
              canvas.setAttribute("height", hight);
              // 将图片画入canvas\
              ctx.drawImage(this, 0, 0, width, hight);
              // 压缩到指定体积以下（M）
              base64 = canvas.toDataURL(imgType, quality);
              resolve(base64); // 在外部函数中获取这个值
            };
          };
        }
      };
      xhr.send();
    });
  }
}
