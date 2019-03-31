const userId = 'T_S_UserId';
const token = 'T_S_Token';
const phone = 'T_S_Phone';
const time = 'T_S_Time';

function getId() {
    return Cookies.get(userId)
}
function getPhone() {
    return Cookies.get(phone)
}
function getToken() {
    return Cookies.get(token)
}
function getTime() {
    return Cookies.get(time)
}
function setId(param) {
    Cookies.set(userId, param)
}
function setToken(param) {
    Cookies.set(token, param)
}
function setPhone(param) {
    Cookies.set(phone, param)
}
function setTime(param) {
    Cookies.set(time, param)
}
function removeUserInfo() {
    Cookies.remove(userId);
    Cookies.remove(token);
    Cookies.remove(phone);
    Cookies.remove(time);
}
function removeTime() {
    Cookies.remove(time)
}



export {
    getId,
    setId,
    getPhone,
    setPhone,
    getToken,
    setToken,
    setTime,
    getTime,
    removeUserInfo,
    removeTime,
}
