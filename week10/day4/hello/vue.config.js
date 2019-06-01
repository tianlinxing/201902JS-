module.exports = {
    publicPath:'./',
    lintOnSave: false, // 保存代码时  忽略eslint

    devServer: {
        // open: true,
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
        
        proxy: {
            "/api": {
                target: "http://yapi.demo.qunar.com",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/mock/24076/api" // rewrite path
                }
            }
        }
    }
};