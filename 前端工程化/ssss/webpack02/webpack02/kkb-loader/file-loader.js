let crypto = require('crypto');
let fs = require('fs')
function loader(code, name, fullpath){
    // 内容，文件相对路径，全路径
    const output = this.config.output.path
    let ext = name.split('.').pop()
    let md5 = crypto.createHash('md5');

    const filename = md5.update(code).digest('hex')+'.'+ext

    // var base64str = new Buffer.from(code).toString('base64')
    fs.copyFileSync(fullpath, `${output}/${filename}`)
    return `module.exports="${filename}"`
}

module.exports = loader