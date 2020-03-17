
const path = require('path')
const BannerPlugin = require('./src/BannerPlugin')
module.exports = {
    output:{
        filename:'kkb.js',
        path: path.resolve(__dirname, './dist')
    },
    module:{
        rules:[
            {
                test:/.css$/ , 
                use:['kkb-loader/style-loader']},
            {
                test:/\.(png|jpg|gif|jpef)$/,
                use:['kkb-loader/file-loader']
            },
        ]
    },
    plugins:[
        new BannerPlugin('开课吧123')
    ]
}