

module.exports = (code)=>{
    let style = `
        let style = document.createElement('style')
        style.innerHTML = ${JSON.stringify(code)}
        document.head.appendChild(style)
    `
    return style
}

