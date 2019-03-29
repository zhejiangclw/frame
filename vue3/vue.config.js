// vue.config.js
// vue-cli3.x 详细webpack配置网址：https://cli.vuejs.org/zh/config/#publicpath
// 此文件配置webpack打包配置
// vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，
// 那么它会被 @vue/cli-service 自动加载。
module.exports = {

    lintOnSave: true,

    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
    // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
    // 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。

    // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，
    // 这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。

    // 相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对 publicPath:
    // 当使用基于 HTML5 history.pushState 的路由时；
    // 当使用 pages 选项构建多页面应用时。
    publicPath: () => {
        switch (process.env.NODE_ENV) {
            case 'production':
                return '/production-sub-path/';
                break;
            case 'test':
                return '/test-sub-path';
                break;
            case 'dev':
                return '/dev-sub-path';
                break;
            default:
                return '/';
                break
        }

    },


    // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。
    // 该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            process.env.BASE_URL = '/pro/';
        } else if (process.env.NODE_ENV === 'test') {
            // 为测试环境修改配置...
            process.env.BASE_URL = '/test/';
        } else {
            // 为开发环境修改配置...
            process.env.BASE_URL = '/dev/';
        }
    }
}
