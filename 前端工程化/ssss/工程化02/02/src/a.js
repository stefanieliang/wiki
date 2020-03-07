
const sayBye = require('./test/b.js')
module.exports = (name)=>{
    console.log('hello '+name)
    sayBye(name)
}