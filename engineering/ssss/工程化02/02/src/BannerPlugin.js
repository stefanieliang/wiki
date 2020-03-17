
class Banner{
    constructor(content){
        this.content = content
    }

    apply(compiler){
        console.log('plugin执行拉')
        compiler.hooks.run.on(()=>{
            console.log('任务开始跑了')
        })
        compiler.hooks.emit.on(()=>{
            console.log(compiler.template)
            compiler.template = `
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
            `+compiler.template
            // compiler.template = `/** ${this.content} */\n`+compiler.template
            console.log('完成啦 还没写文件')
        })
        compiler.hooks.done.on(()=>{
            // consol
            console.log('写文件结束')
        })
    }
}

module.exports = Banner