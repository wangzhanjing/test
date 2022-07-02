// 1、处理data传过来的参数
function resolveData (data) {
  var arr = []
  for (let k in data) {
    var str = k + '=' + data[k]
    arr.push(str)
  }
  return arr.join('&')
}
function myAjax (options) {
  var xhr = new XMLHttpRequest()
  // 外界传过来的参数变为字符串格式
  var qs = resolveData(options.data)
  //判断是get请求还是post请求
  if (options.method.toUpperCase() === 'GET') {
    //调用open属性
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    xhr.open(options.method, options.url)
    //设置请求头
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var res = JSON.parse(xhr.responseText)
      options.success(res)
    }
  }
}