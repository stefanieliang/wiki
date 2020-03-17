
//      ┏┛ ┻━━━━━┛ ┻┓
//      ┃　　　　　　 ┃
//      ┃　　　━　　　┃
//      ┃　┳┛　  ┗┳　┃
//      ┃　　　　　　 ┃
//      ┃　　　┻　　　┃
//      ┃　　　　　　 ┃
//      ┗━┓　　　┏━━━┛
//        ┃　　　┃   神兽保佑
//        ┃　　　┃   代码无BUG！
//        ┃　　　┗━━━━━━━━━┓
//        ┃　　　　　　　    ┣┓
//        ┃　　　　         ┏┛
//        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
//          ┃ ┫ ┫   ┃ ┫ ┫
//          ┗━┻━┛   ┗━┻━┛
            // 模板

!function start(modules) { 
	// 缓存
	var installedModules = {};
	// 获取模块函数
	function __kkbpack_require__(moduleId) {
		// 看下是不是有缓存
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// 没缓存，就新建一个modules，并且存缓存厉
		var module = installedModules[moduleId] = {
			exports: {}
		};
		// 执行函数，module就是一个普通的obj
		modules[moduleId].call(module.exports, module, module.exports, __kkbpack_require__);
		// 返回module.exports的内容
		return module.exports;
	}

	// 执行入口
	return __kkbpack_require__("./src/index.js");
}({"./src/index.js":function(module,exports, __kkbpack_require__){
            eval(`
__kkbpack_require__("./src/index.css")
const sayHi = __kkbpack_require__("./src/a.js")


sayHi('开课吧')



const Logo = __kkbpack_require__("./src/logo.png")

let image = new Image()
image.src = Logo
document.body.appendChild(image)

`)
        },"./src/index.css":function(module,exports, __kkbpack_require__){
            eval(`
        let style = document.createElement('style')
        style.innerHTML = "h1{    color:red;}p{    color:blue;}"
        document.head.appendChild(style)
    `)
        },"./src/a.js":function(module,exports, __kkbpack_require__){
            eval(`
const sayBye = __kkbpack_require__("./src/test/b.js")
module.exports = (name)=>{
    console.log('hello '+name)
    sayBye(name)
}`)
        },"./src/test/b.js":function(module,exports, __kkbpack_require__){
            eval(`

module.exports = function sayBye(name){
    console.log('byebye '+ name)
}`)
        },"./src/logo.png":function(module,exports, __kkbpack_require__){
            eval(`module.exports="37677269787744987e9be27b00b3ab70.png"`)
        },})