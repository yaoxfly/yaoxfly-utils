# yaoxfly-utils

## 介绍

本项目包含项目中常用的方法,包括 uni-app 的一些方法的封装,目前封装的方法有限,有待完善

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

## api

####YxUtils 类常见方法

##### 1. this.\$YxUtils.urlHandle(url)

网址处理,根据当前域名所在的协议自动添加 http 或者 https
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

####YxUni 类 针对 uni-app 的封装

##### 1.this.\$YxUni.back(delta,time)

可设置层级,并可设置延时返回
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| delta | Number|是 | 返回层级 必须大于 1 | |
| time | Number|是 | 延时返回时间 | |

##### 2.this.\$YxUni.showToast(title,time,icon,mask)

显示消息框
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| title | String|是 | 标题 | |
| time | Number|是 | 延时返回时间 时间 1500-10000| |
| icon | String|是 | 图标 | |
| mask | boolean|是 | 是否锁定 | |

##### 3.this.\$YxUni.navigateTo(url,urlParamObj,time)

路由跳转 接收参数 用 JSON.parse(option.urlParamObj) 带返回箭头的封装
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| url | String|是 | 路由 | |
| urlParamObj | Object|否 | 跳转带的参数 | |
| time | String|是 | 延时跳转时间 默认 0 瞬跳 | |

##### 4.this.\$YxUni.redirectTo(url,urlParamObj,time)

关闭当前页面，跳转到应用内的某个页面 接收参数 用 JSON.parse(option.urlParamObj) 带返回箭头的封装
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| url | String|是 | 路由 | |
| urlParamObj | Object|否 | 跳转带的参数 | |
| time | String|是 | 延时跳转时间 默认 0 瞬跳 | |

##### 5.this.\$YxUni.reLaunch(url,urlParamObj,time)

关闭所有页面，打开到应用内的某个页面 接收参数 用 JSON.parse(option.urlParamObj) 带返回箭头的封装
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| url | String|是 | 路由 | |
| urlParamObj | Object|否 | 跳转带的参数 | |
| time | String|是 | 延时跳转时间 默认 0 瞬跳 | |

##### 6.this.\$YxUni.switchTab(url)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 不能带参数
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| url | String|是 | 路由 | |

##### 7.this.\$YxUni.reload(urlParamObj)

重新加载 接收参数 用 JSON.parse(option.urlParamObj)
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------:|
| url | String|是 | 路由 | |
| urlParamObj | Object|否 | 参数 | |

##### 8.this.\$YxUni.getCurrentDomainName()

获取当前域名 //兼容旧版本的工程使用-主要为了跳转到旧版本页面
