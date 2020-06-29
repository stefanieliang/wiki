### 一、 **[ html2canvas](https://github.com/niklasvh/html2canvas)**

#### JavaScript HTML渲染器

该脚本使您可以直接在用户浏览器上截取网页或其一部分的“屏幕快照”。屏幕截图基于DOM，因此可能无法真实表示100％的准确度，因为它无法生成实际的屏幕截图，而是根据页面上的可用信息构建屏幕截图。

#### 它是如何工作的？

该脚本通过读取DOM和应用于元素的不同样式，将当前页面呈现为画布图像。

由于**不需要在服务器上进行任何渲染**，因为整个图像都是在**客户端的浏览器**上创建**的**。但是，由于它严重依赖于浏览器，因此该库*不适合*在nodejs中使用。它也没有神奇地规避任何浏览器内容策略限制，因此呈现跨域内容将需要[代理](https://github.com/niklasvh/html2canvas/wiki/Proxies)才能使内容具有[相同的来源](http://en.wikipedia.org/wiki/Same_origin_policy)。

该脚本仍处于**试验性状态**，因此不建议在生产环境中使用该脚本，也不建议您开始使用它构建应用程序，因为仍会进行重大更改。

#### 安装

```
$ npm install html2canvas
```

#### 用法

html2canvas库使用`Promise`s并期望它们在全局上下文中可用。如果您希望支持本身不支持`Promise`s的[旧版浏览器](http://caniuse.com/#search=promise)，请在包含之前添加诸如[es6-promise](https://github.com/jakearchibald/es6-promise)之类的 [polyfill](https://github.com/jakearchibald/es6-promise)`html2canvas`。

The function returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) containing the `<canvas>` element. Simply add a promise fulfillment handler to the promise using `then`:

```javascript
html2canvas(document.body).then(function(canvas) {
document.body.appendChild(canvas);
});
```

#### 文档

https://html2canvas.hertzen.com/documentation

#### 栗子

https://html2canvas.hertzen.com/tests/

### 二、**[jsPDF](https://github.com/MrRio/jsPDF)**

面向所有人的客户端JavaScript PDF生成。

#### 安装

```
npm install jspdf --save
```

#### 使用

- 文字生成PDF

  

```javascript
// Default export is a4 paper, portrait, using millimeters for units
var doc = new jsPDF()

doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')
```

- 图片生成PDF，**需要将图片转化为dataUrl**

  ```
  // 三个参数，第一个方向，第二个单位，第三个尺寸格式
  var doc = new jsPDF('landscape','pt',[205, 115])
  
  // 将图片转化为dataUrl
  var imageData = ‘data:image/png;base64,iVBORw0KGgo...’;
  
  doc.addImage(imageData, 'PNG', 0, 0, 205, 115);
  doc.save('a4.pdf');
  ```

- 文字与图片生成PDF

  ```javascript
  // 三个参数，第一个方向，第二个尺寸，第三个尺寸格式
    var doc = new jsPDF('landscape','pt',[205, 155])
    
    // 将图片转化为dataUrl
    var imageData = ‘data:image/png;base64,iVBORw0KGgo...’;
    
    //设置字体大小
    doc.setFontSize(20);
    
    //10,20这两参数控制文字距离左边，与上边的距离
    doc.text('Stone', 10, 20);
    
    // 0, 40, 控制文字距离左边，与上边的距离
    doc.addImage(imageData, 'PNG', 0, 40, 205, 115);
    doc.save('a4.pdf')
  ```


#### Use of UTF-8 / TTF:

The 14 standard fonts in PDF are limited to the ASCII-codepage. If you want to use UTF-8 you have to to integrate a custom font, which provides the needed glyphs. jsPDF supports .ttf-files. So if you want to have for example chinese text in your pdf, your font has to have the necessary chinese glyphs. So check if your font supports the wanted glyphs or else it will show a blank space instead of the text.

To add the font to jsPDF use our fontconverter in [/fontconverter/fontconverter.html](https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html) . The fontconverter will create a js-file with the content of the provided ttf-file as base64 encoded string and additional code for jsPDF. You just have to add this generated js-File to your project. You are then ready to go to use setFont-method in your code and write your UTF-8 encoded text.

#### 文档

https://rawgit.com/MrRio/jsPDF/master/docs/index.html

#### 栗子

https://rawgit.com/MrRio/jsPDF/master/

http://mrrio.github.io/

### 三、html2canvas + jsPDF

通过html2canvas将遍历页面元素，并渲染生成canvas，然后将canvas图片格式添加到jsPDF实例，生成pdf。

- a4单页下载

  ```javascript
  html2canvas(document.getElementById("canvas")).then(function(canvas) {
      let dataUrl = canvas.toDataURL();
      const doc = new jsPDF();
      doc.text("html2canvas+jsPDF", 10, 10);
      doc.addImage(dataUrl, "png", 10, 30);
      doc.save("a4-single.pdf");
  });
  ```

