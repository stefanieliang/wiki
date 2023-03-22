[TOC]

## 性能优化之gzip压缩



> 我们给某人发送邮件时，我们在传输之前把自己的文件压缩一下，接收方收到文件后再去解压获取文件。这中操作对于我们来说都已经司空见惯。我们压缩文件的目的就是为了把传输文件的体积减小，加快传输速度。我们在 `http` 传输中开启 `gZip` 的目的也是如此。



### 优化前

![image-20230321164948260](imgs\gzip优化前.png)



### 优化后

![image-20230321165840105](imgs\gzip优化后.png)



这里着重看`index-6984509e.js`资源，开启gzip压缩前，资源大小为1.4MB；开启gzip压缩后，资源大小仅为507kB。资源大小降到之前的**36%**。

再看首屏加载资源的总大小从1.8MB降到650kB，总体压缩率达到**35.3%**。

这里有一个小彩蛋，发现`png`，`ico`资源，压缩前后大小几乎没有发生变化！

|          | 压缩前 | 压缩后 | ratio      |
| -------- | ------ | ------ | ---------- |
| js       | 1.4MB  | 509kB  | 35.51%     |
| css      | 393kB  | 97.2kB | 24.73%     |
| img      | 37kB   | 36.5kB | 98.65%     |
| document | 986B   | 850B   | 86.21%     |
|          |        |        |            |
| 总体     | 1.8MB  | 650kB  | **35.26%** |



### 优化方式一【实时压缩】

#### nginx



### 优化方式二【构建时压缩】

#### webpack

#### vite



### 扩展

> nginx命令
>
> `nginx -s reload`：修改配置后，重新加载；
>
> `tasklist /fi "imagename eq nginx.exe"`： 查看占用的进程；
>
> `taskkill /t /f /im 进程号`： 杀死进程；



### 参考资料

[ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)

[ngx_http_gzip_static](http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html)

[ngx_http_gunzip_module](https://nginx.org/en/docs/http/ngx_http_gunzip_module.html)