/*
 * @Description: 360壁纸接口 
 * @version: V1.0.0
 * @Author: realwds
 * @Date: 2020-12-30 14:31:21
 * @LastEditTime: 2020-12-30 17:13:20
 */
const router = require('koa-router')()
const axios = require('axios')
const commonBaseConfig = 'https://blog.realwds.com'

router.get('/', async(ctx, next) => {
  ctx.body = '<h3>wapllpaper api</h3>'
})

// 获取360壁纸所有类目
router.get('/getAllCategories', async(ctx, next) => {
  const result = await axios({
    method: 'get',
    url: `http://wallpaper.apc.360.cn/index.php?c=WallPaperAndroid&a=getAllCategories`
  })
  ctx.body = {
    data: result.data,
    copyright: `${commonBaseConfig.copyright}`
  }
})

//


// 获取某类别下的壁纸
router.get('/getAppsByCategory', async(ctx, next) => {
  const cid = ctx.request.query.cid
  const start = ctx.request.query.start ? ctx.request.query.start : 0
  const count = ctx.request.query.count ? ctx.request.query.count : 10
  const result = await axios({
    method: 'get',
    url: cid == 'new' ? 
    `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=${start}&count=${count}`:
    `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=${cid}&start=${start}&count=${count}`
  })
  ctx.body = {
    data: result.data,
    copyright: `${commonBaseConfig.copyright}`
  }
})

// 按关键字搜索壁纸
router.get('/search', async(ctx, next) => {
  const kw = encodeURIComponent(ctx.request.query.kw) //解决汉字传入报错
  const start = ctx.request.query.start ? ctx.request.query.start : 0
  const count = ctx.request.query.count ? ctx.request.query.count : 10
  const result = await axios({
    method: 'get',
    url: `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=search&kw=${kw}&start=${start}&count=${count}`
  })
  ctx.body = {
    data: result.data,
    copyright: `${commonBaseConfig.copyright}`
  }
})

// 获取今日热门搜索
router.get('/hotSearch', async(ctx, next) => {
  const result = await axios({
    method: 'get',
    url: `http://openbox.mobilem.360.cn/html/api/wallpaperhot.html`
  })
  ctx.body = {
    data: result.data,
    copyright: `${commonBaseConfig.copyright}`
  }
})

// 获取必应壁纸
router.get('/biying', async(ctx, next) => {
  const start = ctx.request.query.start ? ctx.request.query.start : 0
  const count = ctx.request.query.count ? ctx.request.query.count : 8
  const result = await axios({
    method: 'get',
    url: `http://cn.bing.com/HPImageArchive.aspx?format=js&idx=${start}&n=${count}`
  })
  ctx.body = {
    data: result.data,
    copyright: `${commonBaseConfig.copyright}`
  }
})

module.exports = router
