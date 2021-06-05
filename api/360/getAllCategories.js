const axios = require('axios')

module.exports = async (req, res) => {

  const result = await axios({
    method: 'get',
    url: `http://wallpaper.apc.360.cn/index.php?c=WallPaperAndroid&a=getAllCategories`
  })

  res.json({
    status: 'ok',
    data: result.data
  })
}