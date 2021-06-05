const request = require('request')

module.exports = async(req, res) => {

  var options = {
    method: 'get',
    url: `http://openbox.mobilem.360.cn/html/api/wallpaperhot.html`
  }

  request(options, function(error, response) {
    if (error) {
      res.json({
        status: false,
        msg: "Failed to get 360-shotSearch data"
      })
    } else {
      res.json({
        status: 'ok',
        data: JSON.parse(response.data)
      })
    }
  })
}