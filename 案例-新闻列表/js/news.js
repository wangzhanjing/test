$(function () {
  template.defaults.imports.timeFomate = function (data) {
    return data.slice(0, 10) + ' ' + data.slice(11, 19)
  }
  function getList () {
    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
      if (res.status !== 200) return '获取失败'
      console.log(res);
      res.data.forEach((item, index) => {
        item.tags = item.tags.split(',')
      })
      var list = template('newList', res)
      // var list = template('newList', { data: res.data })
      $('#news-list').html(list)
    })
  }
  getList()
})



