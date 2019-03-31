import {request} from "@/utils/request";

function wechatSDKSign(param) {
   return request({
       url: 'share/wechatSDKSign',
       method: 'post',
       data: param
   })
}

export {
    wechatSDKSign, // 获取微信签名接口
}
