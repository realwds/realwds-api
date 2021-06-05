const request = require('request')

module.exports = async(req, res) => {
  const kw = encodeURIComponent(req.query.kw) //解决汉字传入报错
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 10

  var options = {
    method: 'get',
    url: `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=search&kw=${kw}&start=${start}&count=${count}`
  }

  request(options, function(error, response) {
    if (error) {
      res.json({
        status: false,
        msg: "Failed to get 360-search data"
      })
    } else {
      res.json({
        status: 'ok',
        data: JSON.parse(response.data)
      })
    }
  })
}