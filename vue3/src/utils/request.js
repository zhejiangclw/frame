import axios from 'axios';
import {Indicator} from 'mint-ui';

const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 加载动画
    Indicator.open();

    // 此处对数据或接口进行处理判定，
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 关闭加载动画
    Indicator.close();

    // 此处对返回状态进行判定，可以处理登陆过期等各种状态。
    if (response.data.code == '0000') {
        return Promise.resolve(response.data.appdata)
    } else {
        return Promise.reject(response.data.msg)
    }
}, function (error) {
    // 对响应错误做点什么
    Indicator.close();

    let errStr = error.toString();
    if (errStr.search('timeout') !== -1) {
        error = '请求超时'
    } else if (errStr.toLocaleLowerCase().indexOf('network error') != -1) {
        error = '网络错误'
    }
    return Promise.reject(error);
});


export {
    request
}

