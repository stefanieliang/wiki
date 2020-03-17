const hello = require('./a.js')
hello()

// npx webpack  在node_mudules中找webpack打包

import './index.css'
import './index.styl'


// es6
class Kkb {
    constructor() {
        this.name = 'kkb'
    }
    sayHi() {
        console.log('hi' + this.name)
    }
}
const kkb = new Kkb()
kkb.sayHi()

// js中引入图片
import Logo from './img/logo.jpg'
let img = new Image()
// img.src = './img/logo.jpg'  // 不能用此种
img.src = Logo
document.body.appendChild(img)


// api跨域
import axios from 'axios'
// axios.get('http://localhost:3000/api/info').then(res => {

axios.get('/api/info').then(res => {
    console.log(res)
})

// 支持vue
import './vueApp.js'

// 支持react
import './reactApp.js'

// 懒加载
document.getElementById('btn').addEventListener('click', function () {
    import('./lazy').then(res => {
        console.log(res)
    })
}, false)

// webpack性能优化之 tree-shaking
import {
    hiVue
} from './util.js'
hiVue()

// webpack性能优化之 预计算
// 打包后为 console.log("我是小美女 6")
let a = '我是小美女'
let age = 6
let result = a + ' ' + age
console.log(result)