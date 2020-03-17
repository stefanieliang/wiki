// 演示webpack 的tree_shaking 优化   roll-up首创 
function hiVue() {
    console.log('我爱vue')
}

function hiReact() {
    console.log('我爱react')
}
export {
    hiVue,
    hiReact
}