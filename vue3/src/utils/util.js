/**
 * 常用js方法
 * */
import Vue from 'vue';
import {Toast} from 'mint-ui';
import OboTip from '@/components/otherBrowserOpenTip';

// 注册后还需使用组件
Vue.use(OboTip);

const ua = navigator.userAgent;

// 判断是否ios，android，或者pc
function browseDevice() {
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    if (isMobile) {
        if (isIOS()) {
            return 'IOS'
        } else {
            return 'Android'
        }
    } else {
        return 'PC'
    }
}

// 判断是否ios
function isIOS() {
    return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

// 判断是否微信浏览器
function isWechatBrowser() {
    return (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger');
}

// 毫秒值转 'YY/MM/DD hh:mm:ss'
function formatTimeType1(time) {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return [year.toString().substring(2,4), month, day].map(formatNum).join('/')
        + ' '
        + [hour, minute, second].map(formatNum).join(':')
}
function formatNum(n) {
    n = n.toString();
    return n[1]? n: '0'+n;
}


// 非正式环境输出log日志，正式环境隐藏log日志
const log = window.log = (param) => {
    process.env.NODE_ENV !== 'production' && (console.log(param))
};
// 或
/*function log(param) {
    window.log = (param) => {
        process.env.NODE_ENV !== 'production' && (console.log(param))
    }
}*/

// 判断是否在app内，vue内使用this.$isApp
function judgeApp() {
    try{
        if (isIOS()) {
            !window.webkit.messageHandlers && log('isIOs')
        } else {
            !NativeBridge && log('isAndroid')
        }
        log('isApp');
        Vue.prototype.$isApp = true;
    }catch (e){
        Vue.prototype.$isApp = false;
        log('not App')
    }
}

// 根据是否在app，微信内，以及其他环境点击分享按钮做出对应操作
function handleShare(shareObj) {
    /**
     * shareObj传入参数形式：
     * title: shareObj.title, // 分享标题
     * desc: shareObj.desc, // 分享描述
     * link: shareObj.link,
     * imgUrl: shareObj.imgUrl, // 分享图标
     *
     */
    if (Vue.prototype.$isApp) {
        shareObj = {
            title: shareObj.title,
            dec: shareObj.desc,
            url: shareObj.link,
            imgurl: shareObj.imgUrl,
            funcName: "shareOnly"
        };
        appShareFn(shareObj)
    } else if (isWechatBrowser()) {
        OboTip.open()
    } else {
        Toast('仅支持微信或app内分享')
    }
}

// app分享功能
function appShareFn(shareObj) {
    /**
     * app分享参数形式：
     * title: '想知道专属于我的五维灵魂测评吗？',
     * dec: '认识自己，才能发现更好的自己',
     * url: '',
     * imgurl: '',
     * funcName: 'shareOnly'
     * */
    if (isIOS()) {
        window.webkit.messageHandlers.NativeBridge.postMessage(shareObj);
    } else {
        NativeBridge.shareOnly(shareObj.title, shareObj.dec, shareObj.url, shareObj.imgurl, shareObj.funcName);
    }
}

export {
    formatTimeType1, // 毫秒值转 'YY/MM/DD hh:mm:ss'
    log, // 非正式环境输出log日志，正式环境隐藏log日志
    browseDevice, // 判断pc，android还是ios
    isIOS, // 判断是否ios
    judgeApp, // 判断是否在app内，vue内使用this.$isApp
    handleShare, // 根据是否在app，微信内，以及其他环境点击分享按钮做出对应操作
};
