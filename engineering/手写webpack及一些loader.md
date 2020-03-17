### 1. 初探 webpack 打包后的文件

- webpack 把所有文件以 `key-value` 的形式存在对象里，key表示文件路径，value存储的是文件内容。
- 把 require 方法替换成 `__webpack_require__`。 

```js
// dist/main.js 查看打包后的文件

(function (modules) { // webpackBootstrap
  // The module cache
  var installedModules = {};
  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      exports: {}
    };
    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    // Flag the module as loaded
    module.l = true;
    // Return the exports of the module
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/a.js": (function (module, exports) {
    eval("module.exports = name => {\r\n    console.log(\"你好呀 \" + name);\r\n}\n\n//# sourceURL=webpack:///./src/a.js?");
  }),

  "./src/index.js": (function (module, exports, __webpack_require__) {
    eval("const sayHi = __webpack_require__(/*! ./a.js */ \"./src/a.js\")\r\n\r\nsayHi(\"大美女\")\n\n//# sourceURL=webpack:///./src/index.js?");
  })
});
```

### 2. 手写一个webpack

#### 2.1 新建一个 my-webpack 目录

- `npn init`

- 添加 bin 配置，表示实际执行的文件

  ```diff
  // package.json
  
  {
    ...
  +  "bin": {
  +    "my-webpack": "./src/index.js"
  +  },
    ...
  }
  ```

#### 2.2 新建实际执行的文件

```diff
// my-webpack/src/index.js

+ #! /usr/bin/env node
 // 声明这是一个node文件

+ console.log("我的webpack开工了")
```

#### 2.3 创建链接

- 在`my-webpack`里连接到外部

`npm link`命令将自己的webpack链接到**本地全局**，软连，实时更新，供使用。

```
E:\workspace\wiki\engineering\my-webpack>npm link

up to date in 0.917s
C:\Users\ld\AppData\Roaming\npm\my-webpack -> C:\Users\ld\AppData\Roaming\npm\node_modules\my-webpack\src\index.js
C:\Users\ld\AppData\Roaming\npm\node_modules\my-webpack -> E:\workspace\wiki\engineering\my-webpack
```

- 在`webpack-02`中使用

```
E:\workspace\wiki\engineering\webpack-02>npm link my-webpack

E:\workspace\wiki\engineering\webpack-02\node_modules\my-webpack -> C:\Users\ld\AppData\Roaming\npm\node_modules\my-webpack ->
E:\workspace\wiki\engineering\my-webpack
```

#### 2.4 验证连接

```
E:\workspace\wiki\engineering\webpack-02>npx my-webpack
我的webpack开工了
```



#### 2.5 创建自己的配置文件

```
// webpack-02/mypack.config.js

module.exports = {
    output: {
        filename: "my.js"
    }
}
```

#### 2.6 开发打包工具

```diff
// my-webpack/src/index.js

 #! /usr/bin/env node
 // 声明这是一个node文件

 console.log("我的webpack开工了")
```

#### 2.7 验证开发包是否起作用

```
E:\workspace\wiki\engineering\webpack-02>npx my-webpack
{ entry: './src/index.js', output: { filename: 'my.js' } }
```

#### 2.8 项目动态监听开发包的变化

工具包修改后，项目中自动更新：

- 项目中安装：`npm install onchange --save `

- ```diff
  // webpack-02/package.json
  
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
  +    "build": "my-webpack",
  +    "postbuild": "onchange '../my-webpack/' './src' -- my-webpack"
    },
  ```

- 项目中运行：`npm run build`

