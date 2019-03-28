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

module.exports = {
    formatTimeType1 // 毫秒值转 'YY/MM/DD hh:mm:ss'
};
