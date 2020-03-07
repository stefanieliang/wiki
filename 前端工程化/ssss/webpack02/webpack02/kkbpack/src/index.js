#! /usr/bin/env node
const path = require('path')
const fs = require('fs')
const EventBus = require('./event')
const defaultConfig = {
    entry:"./src/index.js",
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[]
    }
}
const config =  {...defaultConfig, ...require(path.resolve('./kkbpack.config.js'))} 
// console.log(config)

class KkbPack {
    constructor(config){
        this.config = config
        // 入口
        this.entry =config.entry
        // 工作路径
        this.root = process.cwd()
        // 依赖关系
        this.modules = {}

        // 钩子
        this.hooks = {
            // 编译
            emit: new EventBus(),
            run: new EventBus(),
            done: new EventBus()
        }
        this.handlePlugins()

    }
    handlePlugins(){
        let plugins = this.config.plugins || []
        plugins.forEach(plugin=>{
            plugin.apply(this)
        })
    }
    getCode(modulePath,name){
        let content = fs.readFileSync(modulePath, 'utf-8')
        this.config.module.rules.forEach(r=>{
            // 匹配rules
            if(r.test.test(modulePath)){
                // 匹配到了，调用laoder
                r.use.forEach(loaderPath=>{
                    const loader = require(loaderPath)
                    content = loader.call(this,content,name,modulePath)
                })
               
            }
        })
        return content
    }
    // 创建模块
    createModule(modulePath, name){
        // modulePath是绝对路径，获取文件
        // name是相对路径，作为key
        let fileContent = this.getCode(modulePath,name)
        // ./src/index.js 文件的父目录，其实就是src 
        // 解析soruce源码
        const {code, deps} = this.parse(fileContent, path.dirname(name))
        // this.modules[name] = code
        this.modules[name] = `function(module,exports, __kkbpack_require__){
            eval(\`${code}\`)
        }`
        // 递归获取依赖
        deps.forEach(dep=>{
            this.createModule(path.join(this.root,dep), './'+dep)
        })
    }

    parse(code, parent){
        let deps = []
        // 识别 require('xx')
        let r = /require\((.*)\)/g;
        code = code.replace(r, function(match, arg){
            // console.log(1,match, arg.replace(/'|"/g,''))
            const retPath = path.join(parent,arg.replace(/'|"/g,''))
            deps.push(retPath)
            return `__kkbpack_require__("./${retPath}")`
        })
        return {code, deps}
    }
    generateModuleStr(){
        // 生成model字符串
        let fnTemp = ""
        Object.keys(this.modules).forEach(name=>{
            fnTemp += `"${name}":${this.modules[name]},`
        })
        return fnTemp
    }
    generateFile(){
        // console.log(this.modules, this.entry)
        // console.log(123,this.root)
        let template = fs.readFileSync(path.resolve(__dirname,'./template.js'), 'utf-8')
        this.template = template.replace('__entry__',this.entry)
                            .replace('__content__', this.generateModuleStr())
        this.hooks.emit.emit()
        fs.writeFileSync('./dist/'+this.config.output.filename, this.template)
    }
    start(){
        // 创建模块依赖关系
        console.log('开始啦1') 
        this.hooks.run.emit()
        const entryPath = path.resolve(this.root,  this.entry)
        this.createModule(entryPath, this.entry)
        this.generateFile()
        this.hooks.done.emit()

    }

}

const kkb = new KkbPack(config)
kkb.start()

console.log('------\n')