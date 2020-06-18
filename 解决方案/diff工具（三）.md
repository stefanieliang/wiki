### 1. JS文本差异比较

​	此案例可以对比两个 `html` 文件里的文本，同时**隐藏**了 html 标签。

- 引入外部js

  https://github.com/stefanieliang/vue-diff-demo/blob/master/src/views/htmldiff.js

- 使用

  ```vue
  <!-- html-diff -->
  <template>
    <div>
      html-diff
      <div id="target"></div>
    </div>
  </template>
  
  <script>
  import htmldiff from "./htmldiff";
  import { a, b } from "./data";
  export default {
    mounted() {
      // var txt1 = a.replace(/[\r\n]/g, "<br>");
      // var txt2 = b.replace(/[\r\n]/g, "<br>");
      document.getElementById("target").innerHTML = htmldiff.compare(a, b);
    }
  };
  </script>
  <style>
  .diffins {
    background-color: #cfc;
    text-decoration: none;
  }
  .diffdel {
    color: #999;
    background-color: #fec8c8;
  }
  </style>
  ```

### 2. 插件地址

https://www.dreamfans.cn/demo/detail/id-566/

### 3. 项目地址

https://github.com/stefanieliang/vue-diff-demo