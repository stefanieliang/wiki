#! /usr/bin/env node
 // 声明这是一个node文件

// console.log("我的webpack开工了")

const path = require("path")

const defaultOptions = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    }
}

const config = {
    ...defaultOptions,
    ...require(path.resolve("./mypack.config.js"))
}

console.log(config)