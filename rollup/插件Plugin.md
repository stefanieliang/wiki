## 插件Plugin

插件通常用来为`Vue`添加**全局**功能（注意：插件的作用是提供一个全局的功能）一般有以下几种：

1. 添加全局方法或者`property`;

2. 添加全局资源：指令、过滤器、过渡等；

3. 通过全局混入来添加一些组件选项；

4. 添加`Vue`实例方法，通过把他们添加到`Vue.prototype`上实现；

   > 注意：在`Vue3`中，是通过把他们添加到`config.globalProperties`上实现

5. 一个库，提供自己的`API`，同时提供上面提到的一个或多个功能；

### 使用插件

通过全局方法`Vue.use()`使用插件。他需要在你调用`new Vue()`启动应用之前完成：

```js
// 调用`MyPlugin.install(Vue)`
// 第二个参数可选
Vue.use(MyPlugin,{someOption: true})

new Vue({
	// ...组件选项
})
```

`Vue.use()`会自动阻止多次注册相同的插件，届时即使多次调用也只会注册一次该插件。

```js
// 源码
 function install (Vue) {
     ...
     if (install.installed && _Vue === Vue) return
     install.installed = true
     ...
 }
```



> ！思考：`Vue.use()`为什么需要在调用`new Vue()`启动应用之前完成？

[awesome-vue](https://github.com/vuejs/awesome-vue#components--libraries) 集合了大量由社区贡献的插件和库。

### 开发插件

`Vue.js`的插件应该暴漏一个`install`方法。这个方法的第一个参数是`Vue`构造器，第二个参数是一个可选对象：

```js
MyPlugin.install = function (Vue, options) {
	// 1.添加全局方法或property
	Vue.myGlobalMethod = function () {
		...
	}
	
	// 2.添加全局资源
	Vue.directive('my-directive', {
		bind(el, binding, vnode, oldVnode) {
			...
		}
		...
	})
	
	// 3.注册选项组件
	Vue.mixin({
		created:function () {
			...
		}
		...
	})
	
	// 4.添加实例方法
	Vue.prototype.$myMethod = function () {
		...
	}
}
```

