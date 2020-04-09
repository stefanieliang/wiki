module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: {
    devServer: {
      before: function (app, server) {
        app.get("/api/login", function (req, res) {
          const {
            username,
            passwd
          } = req.query;
          if (username === 'ld' && passwd === '123') {
            res.json({
              code: '0000',
              data: {
                token: "shuangwaiwai-" + (new Date().getTime() + 1000 * 60)
              }
            })
          } else {
            res.json({
              code: "9999",
              message: "用户名或密码错误！"
            })
          }
        })
      }
    }
  }
}