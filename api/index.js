const request = require('request')

module.exports = async(req, res) => {
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 8
  
  const options = {
    method: 'get',
    url: `http://cn.bing.com/HPImageArchive.aspx?format=js&idx=${start}&n=${count}`
  }
  
  request(options, function(error, response) {
    if (error) { // if error fetching time
      res.json({
        status: false,
        msg: "Failed to get time data"
      })
    } else {
      res.json({
        status: 'ok',
        data: JSON.parse(response.body)
      })
    }
  })
})
