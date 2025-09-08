const axios = require('axios')

module.exports = async (req, res) => {
  const result = await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${req.query.token}`,
    data: {
      msgtype: 'text',
      text: {
        content: "hello world"
      }
    }
  })

  res.json({
    status: 'ok',
    data: res
  })
}
