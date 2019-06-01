module.exports = {
    publicPath:'./', // 修改基础路径 
    lintOnSave: false, // 保存代码时  忽略eslint

    devServer: {
        // open: true,
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
        
        proxy: {
            // 只对本地开发起作用
            "^/api": {
                target: "https://www.easy-mock.com/mock/5bf0ee68643497494c87d289", // 我们要转接到的域
                ws: true, // 默认true
                changeOrigin: true, // 是否改变域
                pathRewrite: {// 路径重写
                    // "^/api": "/mock/5bf0ee68643497494c87d289/api", 
                    // // "^/qqq": "/mock/5bf0ee68643497494c87d289/qqq", 
                    // 假如我们的访问路径是以 /api开头的； 同意转到了/mock/24076/api 这个路径
                    // "^/bannerList": "/mock/5bf0ee68643497494c87d289/bannerList" // rewrite path
                    //http://yapi.demo.qunar.com/qqq/bannerList
                    // localhost:8080/api/bannerList
                    //https://www.easy-mock.com/mock/5bf0ee68643497494c87d289/api/bannerList
                }
            }
        }
    }
};