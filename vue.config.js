const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9000
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: [
        {
          alias: path.resolve(__dirname, 'src/pages/')
        }
      ]
    }
  }
})

// {
//   Pages: path.resolve(__dirname, 'src/pages/'),
//   Components: path.resolve(__dirname, 'src/components/'),
//   Router: path.resolve(__dirname, 'src/Router/'),
//   Assets: path.resolve(__dirname, 'src/assets/'),
//   Public: path.resolve(__dirname, 'public/')
// }
