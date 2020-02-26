## 一、组件通信

#### 1.父组件 => 子组件：

- 属性props

```
// child
props:{message:String}

//parent
<HelloWorld message="Welcome to Your Vue.js App"/>
```

- 引用refs

```
//parent
<HelloWord ref="hw"/>

mounted(){
	this.$refs.hw.xx = "xxx"
}
```

- 子元素children

```
// 子元素不保证顺序，也不是响应式

//parent
this.$children[0].xx = "xxx"
```



#### 2.子组件 => 父组件：自定义事件

  ```
// 观察者模式

// child	
this.$emit('add',good)

//parent
<Cart @add="cartAdd($event)"/>
  ```



#### 3.兄弟组件：通过共同祖辈组件

​	通过共同的祖辈组件搭桥，$parent或$root

  ```
// brother1
this.$parent.$on('foo',handle)	

// brother2
this.$parent.$emit('foo')
  ```



#### 4.祖先和后代之间

​	由于嵌套层数过多，传递props不切实际，vue 提供了provide/inject API完成该任务

- provide/inject：能够实现祖先给后代传值

```
// ancestor
provide(){
    return {foo:'foo'}
}

// deancestor
inject:['foo']
```

> 注意：provide 和 inject 主要为高阶插件/组件库提供用例。并**不推荐直接用于应用程序代码中**，我们更多会在开源组件库中见到。
>
> 但是反过来，想要后代给祖先传值这种方案就不行了。



#### 5.任意两个组件之间：事件总线 或 vuex

- 事件总线：创建一个Bus类负责事件派发、监听和回调管理。

```
class Bus{
    constructor(){
    	// {
        // 	eventName1:[fn1,fn2]
        // 	eventName2:[fn3,fn4]
        // }
        this.callbacks = {}
	}
	$on(name,fn){
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
	}	
	$emit(name,args){
        if(this.callbacks[name]){
            this.callbacks[name].forEach(cb => cb(args))
        } 
	}
}

// main.js
Vue.prototype.$bus = new Bus()

//child1
this.$bus.$on('foo',handle)
//child2
this.$bus.$emit('foo')
```

> 实践中，可以用 Vue 代替 Bus。

- vuex：创建唯一的全局数据管理者store，通过他管理数据并通知组件状态变更。



## 二、插槽

插槽语法是vue实现的内容分发API，用于复合组件开发。该技术在通用组件库开发中有大量应用。

> vue 2.6.0 之后采用全新v-slot语法取代之前的slot，slot-scope

#### 1.匿名插槽

```
// comp1
<div>
	<slot></slot>
</div>

// parent 
<comp1>hello</comp1>
```

#### 2.具名插槽

​	将内容分发到子组件指定位置

```
// comp2
<div>
	<slot></slot>
	<slot name="content"></slot>
</div>

// parent 
<comp2>
	<template v-slot:default>匿名插槽</template>
	<template v-slot:content>内容。。</template>
</comp2>
```

#### 3.作用域插槽

​	分发内容要用到子组件中的数据

```
// comp3
<div>
	<slot></slot>
	<slot：foo="foo"></slot>
</div>

// parent 
<comp3>
	<template v-slot:default="slotProps">
		来自子组件数据：{{slotProps.foo}}
	</template>
</comp3>
```

