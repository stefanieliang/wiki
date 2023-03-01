## 简介

### 概览

`Rollup`是一个`JavaScript`模块打包机，将小碎片代码编译成巨大的更复杂的东西，比如一个`library`或者`application`。它在编码模块中运用了`ES6`修订版中新的标准化格式，代替了之前的`CommonJS`和`AMD`等特殊解决方案。`ES`模块让你从喜爱的库中更加自由和无缝的结合最有用的单个函数。

### 安装

`npm install --global rollup`

### 快速启动

`Rollup`可通过两种方式使用：一种是通过带有可选配置文件的命令行接口（ [command line interface](https://rollupjs.org/guide/en/#command-line-reference) ），另一种是通过 [JavaScript API](https://rollupjs.org/guide/en/#javascript-api)。执行`rollup --help`可以查看可用的选项和参数。

> 两个使用`Rollup`打包的例子
>
>  [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) 
>
>  [rollup-starter-app](https://github.com/rollup/rollup-starter-app) 

下面的命令假定你应用程序的入口文件命名为`name.js`，并将所有的导入编译成一个叫`bundle.js`的单文件。

For browsers:

```
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife
```

For Node.js:

```
# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs
```

For both browsers and Node.js:

```
# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
```

### 背景

如果您将项目分解成更小的独立部分，开发软件通常会更容易，因为这通常会消除意想不到的交互，并显著降低您需要解决的问题的复杂性，而一开始简单地编写较小的项目不一定就是答案。不幸的是，JavaScript历史上并没有将此功能作为语言的核心特性。

这点最终随着`ES6`修订版改变，其包含的导入和导出方法和数据，可以在分离的脚本间共享。此规范已经形成，但是仅在现代浏览器中可以被执行，并且没有在`Node.js`中敲定。`Rollup`可以让你在编写代码时使用新的模块系统，并且编译成现有支持的格式，比如`CommonJs`模式，`AMD`模式，自执行脚本。

### Tree-Shaking

除了支持ES模块的使用外，`Rollup`还会静态地分析您正在导入的代码，并排除任何实际未使用的代码。这允许您在现有工具类和模块的基础上进行构建，而无需添加额外的依赖项或增加项目的大小。

例如：使用`CommonJs`，整个工具或类必须引入。

```js
// import the entire utils object with CommonJS
const utils = require('./utils');
const query = 'Rollup';
// use the ajax method of the utils object
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

使用`ES` 模块, 我们可以只导入一个我们需要的`ajax`方法

```js
// import the ajax function with an ES6 import statement
import { ajax } from './utils';
const query = 'Rollup';
// call the ajax function
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

因为`Rollup`包含了最少的内容，所以它可以产生更轻、更快、更简单的库和应用程序。因为这种方法可以使用显式的import和export语句，所以它比简单地运行一个自动的压缩工具来检测编译后的输出代码中未使用的变量更有效。

### 兼容性

#### 导入`CommonJS`

`Rollup`可以通过插件（[through a plugin](https://github.com/rollup/plugins/tree/master/packages/commonjs)）导入现有的`CommonJS`模块。

#### 发布`ES`模块

为了确保你的`ES` 模块可以立即被使用`CommonJS`的工具使用，比如`Node.js` 和`webpack`，你可以使用`Rollup`编译成`UMD`或者`CommonJS`格式，然后在你的 `package.json` 文件的 `main` 属性中标明编译后的版本。如果你的 `package.json` 文件也有一个`module`字段，支持`ES`模块的工具如`Rollup`和`webpack 2+`（ [webpack 2+](https://webpack.js.org/) ）将直接导入`ES`模块版本（ [import the ES module version](https://github.com/rollup/rollup/wiki/pkg.module) ）。





## 命令行接口

`Rollup`通常应该从命令行使用。你可以提供一个可选的`Rollup`配置文件去简化命令行的使用和启用高级`Rollup`功能。

### 配置文件

`Rollup`配置文件是可选的，但是它们功能强大且方便，因此推荐使用。配置文件是一个ES模块，它导出一个默认对象，并带有所需的选项:

```js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

