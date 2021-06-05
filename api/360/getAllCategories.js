const request = require('request')

module.exports = async(req, res) => {

  var options = {
    method: 'get',
    url: `http://wallpaper.apc.360.cn/index.php?c=WallPaperAndroid&a=getAllCategories`
  }

  request(options, function(error, response) {
    if (error) {
      res.json({
        status: false,
        msg: "Failed to get 360-getAllCategories data"
      })
    } else {
      res.json({
        status: 'ok',
        data: JSON.parse(response.data)
      })
    }
  })
}