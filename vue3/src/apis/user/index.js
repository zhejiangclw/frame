import {request} from "@/utils/request";

function login(param) {
    return request({
        url: "user/login",
        method: 'post',
        data: param
    })
}

function sendsms(param) {
    return request({
        url: 'sms/send',
        method: 'post',
        data: param
    })
}



export {
    login, // 登录
    sendsms // 获取短信
}

