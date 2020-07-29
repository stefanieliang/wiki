## 一、RecordRTC.js

#### 1.特点

- 一个 JavaScript 库

- 支持 **Audio+Video+Screen+Canvas (2D+3D animation)** 录制

- [GitHub 地址](https://github.com/muaz-khan/RecordRTC)

#### 2.支持性

| Browser        | Features               |
| -------------- | ---------------------- |
| Google Chrome  | audio + video + screen |
| Firefox        | audio + video + screen |
| Opera          | audio + video + screen |
| Edge (new)     | audio + video + screen |
| Safari         | audio + video          |
| 微信内置浏览器 | screen                 |
| 微信小程序     | 待验证？               |

在此 [查看](https://caniuse.com/#search=getDisplayMedia) 浏览器支持性：

![image-20200728165052893](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200728165052893.png)

![image-20200728165110967](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200728165110967.png)

#### 3.项目截图

- ##### chrome 浏览器

![image-20200724154001080](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200724154001080.png)

- ##### 微信内置浏览器

![image-20200724161846590](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200724161846590.png)

#### 4.使用方法

- 调取屏幕分享

  `navigator.mediaDevices.getDisplayMedia()`

- 设置 `options`

  ```javascript
  recorder = RecordRTC(screen, {
      type: 'video',
      mimeType: 'video/webm',
  });
  ```

- 开始录屏

  `recorder.startRecording()`

- 结束录屏

  `recorder.stopRecording()`

- 存储

  `invokeSaveAsDialog()`



## 二、Fundebug 

#### 1.插件特点

- [一行代码搞定](https://docs.fundebug.com/notifier/javascript/integration/)；
- 自动捕获未处理的错误；
- 能够捕获3种不同的前端错误：[JavaScript执行错误](https://docs.fundebug.com/notifier/javascript/type/javascript.html)，[资源加载错误](https://docs.fundebug.com/notifier/javascript/type/resource.html)和[HTTP请求错误](https://docs.fundebug.com/notifier/javascript/type/http.html)。
- **[出错场景完全可视化重现](https://blog.fundebug.com/2018/05/21/fundebug_release_black_tech_replay/)，相当于"录屏"；**
- 支持通过[Source Map](https://docs.fundebug.com/notifier/javascript/sourcemap/)还原出错源代码
- [记录出错前的鼠标点击、HTTP请求、页面跳转、console打印等用户行为](https://blog.fundebug.com/2017/09/14/fundebug-can-recurrent-all-bug/)，帮助您复现BUG
- [支持收集try/catch捕获的错误](https://docs.fundebug.com/notifier/javascript/api/notifyerror.html)；
- [兼容所有浏览器包括IE 6到 IE 11](https://blog.fundebug.com/2017/01/16/fundebug-support-all-browsers/)；
- 兼容所有前端开发框架，例如[Vue.js](https://docs.fundebug.com/notifier/javascript/framework/vuejs.html)，[React](https://docs.fundebug.com/notifier/javascript/framework/react.html)，[AngularJS](https://docs.fundebug.com/notifier/javascript/framework/angularjs1.html)，[Angular 2](https://docs.fundebug.com/notifier/javascript/framework/angularjs2.html)，[Angular 4](https://docs.fundebug.com/notifier/javascript/framework/angularjs4.html)，[Ionic 1](https://docs.fundebug.com/notifier/javascript/framework/ionic1.html)，[Ionic 2](https://docs.fundebug.com/notifier/javascript/framework/ionic2.html)，[Cordova](https://docs.fundebug.com/notifier/javascript/framework/cordova.html)，[GitBook](https://docs.fundebug.com/notifier/javascript/framework/gitbook.html)等；
- **敏感信息过滤**

#### 2.支持性

| 语言框架        | 支持性 |
| --------------- | ------ |
| JavaScript：vue | 1      |
| 微信小程序      | 1      |
| 微信小游戏      | 1      |
| Node.js         | 1      |
| Java：Spring    | 1      |

#### 3.项目截图

- ##### 错误列表图例


![image-20200722163427197](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200722163427197.png)

- ##### 场景重现图例

![image-20200722163630024](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200722163630024.png)

- ##### 产品价格

![image-20200722164657780](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200722164657780.png)

#### 4.使用方法

##### 接入插件

- ##### 1. 安装fundebug-javascript与fundebug-vue  [文档](https://docs.fundebug.com/notifier/javascript/integration/npm.html)

  ```
  npm install fundebug-javascript fundebug-vue --save
  ```

  ##### 2. 在main.js中引入fundebug-javascript与fundebug-vue

  ```
  import * as fundebug from "fundebug-javascript";
  import fundebugVue from "fundebug-vue";
  fundebug.apikey = API_KEY;
  fundebugVue(fundebug, Vue);
  ```

##### 接入录屏

如果您需要使用录屏功能，请继续接入revideo插件！[文档](https://docs.fundebug.com/notifier/javascript/revideo.html)

- ```
  npm install fundebug-revideo --save
  ```

  ###### 在js文件中导入

  ```
  require('fundebug-revideo');
  ```

  ###### 也可以选择脚本引入

  ```
  <script src="https://js.fundebug.cn/fundebug.revideo.0.6.0.min.js"
  ></script>
  ```

#### 5.参考资料

- [如何实现Web页面录屏？](https://segmentfault.com/a/1190000020332146)

## 三、Captura

#### 1.特点

- 一款免费开源的屏幕录制工具
- 能够将屏幕上的任意区域、窗口录制成视频，可以选择是否显示鼠标、记录鼠标点击、键盘按键、声音

## 四、rrweb

#### 1.特点

- 一个高质量的开源库，使用 `MutationObserver` API
- 隐私信息保护
- [Github地址](https://github.com/rrweb-io/rrweb)

#### 2.支持性

由于使用 `MutationObserver` API，rrweb 不支持 IE11 以下的浏览器。可以从[这里](https://caniuse.com/#feat=mutationobserver)找到兼容的浏览器列表。

![image-20200728164126379](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200728164126379.png)

#### 3.项目截图

- chrome浏览器

  ![image-20200728163343545](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200728163343545.png)

- 微信内置浏览器

  ![image-20200728163818171](C:\Users\jiangtai\AppData\Roaming\Typora\typora-user-images\image-20200728163818171.png)

#### 4.使用方法

- 安装

  ```javascript
  // cdn
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.js"></script>
  
  // npm
  npm install --save rrweb
  ```

- 录制

  ```javascript
  let events = [];
  
  rrweb.record({
    emit(event) {
      // 将 event 存入 events 数组中
      events.push(event);
    },
  });
  ```

- 回放

  ```javascript
  const events = YOUR_EVENTS;
  
  const replayer = new rrweb.Replayer(events);
  replayer.play();
  ```

#### 5.参考资料

- [网页应该如何录屏呢？](https://segmentfault.com/a/1190000019983010)
- [rrweb：打开 web 页面录制与回放的黑盒子](https://zhuanlan.zhihu.com/p/60639266)
- [webfunny：一步一步搭建前端监控系统](https://www.cnblogs.com/warm-stranger/category/1202339.html)