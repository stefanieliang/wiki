# node-sass 下载失败 解决方案



下载项目的时候run install时，node-sass下载失败后来我在项目根目录下添加了一个.npmrc

```
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```

把node-sass的路径修改成淘宝的npm，就很顺利的可以在国内的网络环境下载了