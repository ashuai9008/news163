// vue.config.js
module.exports = {
  // 选项...
  /* devServer: {
    proxy: 'http://localhost:9001'
  }, */
  devServer:{
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      // /api 是一个访问别名
      '/api': { //axios访问 /api ==  target + /api
        target: 'http://localhost:9001',
        changeOrigin: true, //创建虚拟服务器 
        ws: true, //websocket代理
      },
      '/T1348647853363/0-140.html': { // axios 访问 /douban/v2/xxx == target + '/douban/v2/xx
        target: 'http://c.3g.163.com/nc/article/headline',
        changeOrigin: true,
        pathRewrite: { //路径替换
          '^/douban': '', // axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}