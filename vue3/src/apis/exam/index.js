import {request} from '@/utils/request';

function getExamDetail(param) {
    return request({
        url: 'exam/detail',
        method: 'post',
        data: param,
    })
}

export {
    getExamDetail, // 获取测试详情api接口
}
