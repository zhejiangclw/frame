/**
 * 修改微信分享内容
 * */
import {wechatSDKSign} from "@/apis/share";

function wechatShare(shareObj) {
    let _this = this;
    let _url = window.location.href.split('#')[0]; // 此处裁剪url获取当前#前面的部分

    log('----------分享参数----------');
    log(shareObj);

    wechatSDKSign({url: _url}).then(res => {
        log('----------微信签名参数-------------');
        log(res);

        wx.config({
            debug: false,
            appId: res.appId,
            timestamp: res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: ["checkJsApi", 'onMenuShareAppMessage', 'onMenuShareTimeline']
        });

        wx.showMenuItems({
            menuList: ["menuItem:share:appMessage", "menuItem:share:timeline",  "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:QZone"] // 要显示的菜单项，所有menu项见附录3
        });
        wx.error(function(res){
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            log("wx.err")
            log(res);
        });

        wx.checkJsApi({
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function(res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                log("checkJsApi:")
                log(res);
            }
        });
        wx.ready(function(){
            wx.onMenuShareAppMessage({
                title: shareObj.title, // 分享标题
                desc: shareObj.desc, // 分享描述
                link: shareObj.link,
                imgUrl: shareObj.imgUrl, // 分享图标
                success: function () {
                    log("分享成功"); // 设置成功
                    log(window.location.href)
                }
            });
            wx.onMenuShareTimeline({
                title: shareObj.title, // 分享标题
                desc: shareObj.desc, // 分享描述
                link: shareObj.link,
                imgUrl: shareObj.imgUrl, // 分享图标
                success: function () {
                    log("分享成功"); // 设置成功
                    log(window.location.href)
                }
            });
            wx.onMenuShareAppMessage(shareObj);
            wx.onMenuShareQQ(shareObj);
        })
    }).catch(err => {

    })

}

export {
    wechatShare, // 修改微信分享内容
}


