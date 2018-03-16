function ajax(option) {
    // 创建对象
    var ajax = new XMLHttpRequest();
    // 需要把数据拼接到url中
    if (option.type == 'get') {
        // 如果是get 数据拼接
        option.url += '?';
        option.url += option.data;
        // 如果是 get  直接把data设置为null 方便后续的编码
        option.data = null;
    }
    // 设置请求行
    ajax.open(option.type, option.url);
    // 设置请求头
    // 如果是post
    if (option.type == 'post') {
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    // 设置回调函数
    ajax.onload = function () {
        // console.log(ajax.responseText);
        option.success(ajax.responseText);
    }
    // 设置请求主体
    ajax.send(option.data);
}
/*
    get的函数
    url:请求的地址
    data:发送的数据 格式是 key=value&key2=value2
    func:回调函数
*/
function get(url, data, func) {
    // 创建对象
    var ajax = new XMLHttpRequest();
    // 需要把数据拼接到url中
    // xxx.php?key=value&key2=value2
    url += '?';
    url += data;

    // 设置请求行
    ajax.open('get', url);
    // 设置请求头
    // 设置回调函数
    ajax.onload = function () {
        // console.log(ajax.responseText);
        func(ajax.responseText);
    }
    // 设置请求主体
    ajax.send(null);
}
/*
    post的函数
    url:请求的地址
    data:发送的数据 格式是 key=value&key2=value2
    func:回调函数
*/
function post(url, data, func) {
    // 创建对象
    var ajax = new XMLHttpRequest();
    // 需要把数据拼接到url中
    // 设置请求行
    ajax.open('post', url);
    // 设置请求头
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // 设置回调函数
    ajax.onload = function () {
        // console.log(ajax.responseText);
        func(ajax.responseText);
    }
    // 设置请求主体
    ajax.send(data);
}