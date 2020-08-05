## 环境准备

```javascript
// 1.安装 vue cli
npm install -g @vue/cli
// (sudo npm install -g @vue/cli 解决 mac 全局安装无权限问题)
// (vue --version 检查安装的版本)

// 2.创建一个 vue 项目
vue create vue-ssr

// 3.引入ssr支持
npm install vue vue-server-renderer --save

// 集成 node.js 服务器
npm install express --save
```

## 配置