## Nginx

nginx是一款高性能的 Web和 反向代理 服务器，也是一个 IMAP/POP3/SMTP 代理服务器。负载均衡是个不错的选择。

**第一步：先安装PCRE pcre-devel 和Zlib，配置nginx的时候会用到这两个东西**

PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：

```
yum install -y pcre pcre-devel
```

zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。（这一步在38服务器安装失败了，显示有多个版本重复，不清楚是不是38上已经有了某一个版本）

```
yum install -y zlib zlib-devel
```

安装好这两个之后就可以安装nginx了，但是如果安装的时候有问题的话可能需要安装GCC和OpenSSL以下提供命令

```
yum install gcc-c++
yum install -y openssl openssl-devel
```

**第二步：安装nginx,1.14.0**

```
wget -c https://nginx.org/download/nginx-1.14.0.tar.gz
```

解压并进入nginx目录

```
tar -zxvf nginx-1.14.0.tar.gz
cd nginx-1.14.0
```

使用nginx的默认配置

```
./configure
```

编译安装

```
make
make install
```

查找安装路径：（显示nginx:/usr/local/nginx）

```
whereis nginx
```

进入sbin目录，可以看到有一个可执行文件nginx，直接./执行就OK了。

```
cd /usr/local/nginx/sbin
./nginx
```

运行起来之后访问服务器ip，可以看到nginx的欢迎页面（默认80端口）

**第三步：配置nginx**

配置文件目录在/usr/local/nginx/conf下。

```
server{
    ...
	location / {
		root /usr/local/nginx/html;
		index index.html index.htm;
	}
    ...
}
```

**第四步：启动-停止nginx**

**启动**

启动代码格式：nginx安装目录地址 -c nginx配置文件地址

```
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

**停止**

 nginx的停止有三种方式

**从容停止**

```
ps -ef|grep nginx
```

![img](https://img2018.cnblogs.com/blog/1470384/201904/1470384-20190409154711813-1966650821.png)

杀死进程（注意每次启动后进程号3905会变）

```
kill -QUIT 3905
```

**快速停止**

```
kill -TERM 3905
```

或者

```
kill -INT 3905
```

**强制停止**

```
pkill -9 nginx
```

**重启**（重启时需保证服务此时是启动状态）

方法一：进入nginx可执行目录sbin下，输入命令./nginx -s reload 即可

![img](https://img2018.cnblogs.com/blog/1470384/201904/1470384-20190409155547898-1115398652.png)

 

方法二：查找当前nginx进程号，然后输入命令：kill -HUP 进程号 实现重启

![img](https://img2018.cnblogs.com/blog/1470384/201904/1470384-20190409155908331-1050350400.png)





参考资料：[linux服务器安装nginx及使用](https://www.cnblogs.com/ghzjm/p/10677599.html)