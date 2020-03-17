
require('./index.css')
const sayHi = require('./a.js')


sayHi('开课吧')



const Logo = require('./logo.png')

let image = new Image()
image.src = Logo
document.body.appendChild(image)

