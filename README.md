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

###### 注:需要使用 this 对象才能引用方法哦

### 方法介绍

##### this.\$YxUtils.urlHandle

网址 处理,根据协议添加 http 或者 https
| 参数名 | 类型 | 必填 | 说明 | 平台差异说明|
| :------: | :------: | :------: | :------: |:------: |
| url | String | 是 | 网址 |H5|

### 源码地址

[yaoxfly-util](https://gitee.com/yaoxfly/yaoxfly-utils) 看到我了就帮我点 star 哦,谢谢!

```

```
