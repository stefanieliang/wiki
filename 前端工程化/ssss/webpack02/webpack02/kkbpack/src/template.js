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
	return __kkbpack_require__("__entry__");
}({__content__})