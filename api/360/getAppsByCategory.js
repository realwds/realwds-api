const axios = require('axios')

module.exports = async (req, res) => {
  const cid = req.query.cid
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 10

  const result = await axios({
    method: 'get',
    url: cid == 'new' ?
      `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=${start}&count=${count}` : `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=${cid}&start=${start}&count=${count}`
  })

  res.json({
    status: 'ok',
    data: result.data
  })

}