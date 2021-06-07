const axios = require('axios')

module.exports = async (req, res) => {
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 1

  const result = await axios({
    method: 'get',
    url: `http://cn.bing.com/HPImageArchive.aspx?format=js&idx=${start}&n=${count}`
  })

  res.json({
    status: 'ok',
    data: result.data
  })
}