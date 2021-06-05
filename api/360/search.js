const axios = require('axios')

module.exports = async (req, res) => {
  const kw = encodeURIComponent(req.query.kw) //解决汉字传入报错
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 10

  const result = await axios({
    method: 'get',
    url: `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=search&kw=${kw}&start=${start}&count=${count}`
  })

  res.json({
    status: 'ok',
    data: result.data
  })
}