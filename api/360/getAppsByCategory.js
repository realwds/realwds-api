const request = require('request')

module.exports = async(req, res) => {
  const cid = req.query.cid
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 10

  var options = {
    method: 'get',
    url: cid == 'new' ? 
    `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=${start}&count=${count}`:
    `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=${cid}&start=${start}&count=${count}`
  }

  request(options, function(error, response) {
    if (error) {
      res.json({
        status: false,
        msg: "Failed to get 360-getAppsByCategory data"
      })
    } else {
      res.json({
        status: 'ok',
        data: JSON.parse(response.data)
      })
    }
  })
}