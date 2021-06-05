const axios = require('axios')

module.exports = async (req, res) => {
  const result = await axios({
    method: 'get',
    url: `http://openbox.mobilem.360.cn/html/api/wallpaperhot.html`
  })

  res.json({
    status: 'ok',
    data: result.data
  })
}