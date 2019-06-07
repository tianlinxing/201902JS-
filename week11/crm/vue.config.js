module.exports = {
    lintOnSave:false,
    devServer: {
        // open: true,
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
        
        proxy: {
            // 只对本地开发起作用
            "^/api": {
                target: "http://localhost:9000", // 我们要转接到的域
                ws: true, // 默认true
                changeOrigin: true, 
            }
        }
    }
}
// vue的配置文件  每次修改都要重启服务