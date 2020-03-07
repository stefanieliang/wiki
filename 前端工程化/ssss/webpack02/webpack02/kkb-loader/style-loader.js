

module.exports = (code)=>{
    let style = `
        let style = document.createElement('style')
        style.innerHTML = "${code.split('\n').join('')}"
        document.head.appendChild(style)
    `
    return style
}

