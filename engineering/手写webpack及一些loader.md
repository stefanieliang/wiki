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

my-webpack/src/index.js

```
#! /user/bin/env node
 // 声明这是一个node文件

console.log("我的webpack开工了")
```

#### 2.3 链接到外部供使用

`npm link`命令将自己的webpack链接到外部，供使用。

```
E:\workspace\wiki\前端工程化\my-webpack>npm link

up to date in 0.847s
C:\Users\ld\AppData\Roaming\npm\my-webpack -> C:\Users\ld\AppData\Roaming\npm\node_modules\my-webpack\src\index.js
C:\Users\ld\AppData\Roaming\npm\node_modules\my-webpack -> E:\workspace\wiki\前端工程化\my-webpack
```

