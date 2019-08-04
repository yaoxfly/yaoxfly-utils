# yaoxfly-utils

## 介绍

本项目包含项目中常用的方法,包括 uni-app 的一些方法的封装,
有待完善

### 安装教程

```
npm i yaoxfly-utils
```

### 使用说明

1. 在 main.js 文件里

```
import utils from 'yaoxfly-utils'
Vue.use(utils)
```

2. 示范

```
console.log(this.$YxUtils.timeStampToDate(1564808776))
```

输出结果:2019-08-03

###### 注:需要使用 vue 对象才能引用方法哦 以下用 this 来代替

### 方法介绍

##### 1. this.\$YxUtils.urlHandle(url)

网址 处理,根据协议添加 http 或者 https
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| url | String | 是 | 网址 |H5|

##### 2. this.\$YxUtils.timeStampToDate(timeStamp)

时间搓转换为 date 类型
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| timeStamp | int | 是 | 被转换的时间搓 ||

##### 3. this.\$YxUtils.timeStampToDateTime(timeStamp)

时间搓转换为 dateTime
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| timeStamp | int | 是 | 被转换的时间搓 ||

##### 4. this.\$YxUtils.timestampFormat(timeStamp)

时间搓转换为昨天 刚刚 几分钟前等
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| timeStamp | int | 是 | 被转换的时间搓 ||

##### 5. this.\$YxUtils.getJsonLength(jsonData)

获取 json 长度
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| jsonData | Object | 是 | json 对象 ||

##### 6. this.\$YxUtils.getCutOutContent(value,length )

内容超过某个长度 加...
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| value | string | 是 | 截取的内容 ||
| length | number | 否 | 截取的长度,默认 28||

##### 7. this.\$YxUtils.isNullObject(object)

判断是否是空对象、空对象数组、空数组
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| object | array|Object | 是 | 被判断的对象或者对象数组 ||

##### 8. this.\$YxUtils.blobToBase64(imgUrl)

blob 转 base64 并压缩
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| imgUrl | String | 是 | 被判断的对象或者对象数组 |H5|

tips: 图片路径 blob 格式的

### 源码地址

[yaoxfly-util](https://gitee.com/yaoxfly/yaoxfly-utils) 看到我了就帮我点 star 哦,谢谢!
