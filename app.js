/*
 * @Description: 
 * @version: V1.0.0
 * @Author: realwds
 * @Date: 2020-12-23 10:05:17
 * @LastEditTime: 2020-12-30 16:28:30
 */
const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()

router.get('/', async (ctx, next) => {
	ctx.body = `
	<div style="height:88vh;display:flex;align-items:center;justify-content:center;">
		<p style="color:#636b6f;font-family:'Raleway',sans-serif;font-size:30px;font-weight:100;">
      https://blog.realwds.com
		</p>
	</div>
	`
})

// 404页面统一处理
app.use(async (ctx, next) => {
  await next()
  if(parseInt(ctx.status) === 404 ){
		ctx.body = `
		<div style="height:88vh;display:flex;align-items:center;justify-content:center;">
			<p style="color:#636b6f;font-family:'Raleway',sans-serif;font-size:30px;font-weight:100;">
				404，页面不见了
			</p>
		</div>
		`
  } else if(parseInt(ctx.status) === 500 ){
		ctx.body = `
		<div style="height:88vh;display:flex;align-items:center;justify-content:center;">
			<p style="color:#636b6f;font-family:'Raleway',sans-serif;font-size:30px;font-weight:100;">
				500，服务器崩了
			</p>
		</div>
		`
  }
})

let urls = fs.readdirSync(__dirname + '/routes')

urls.forEach((element) => {
	let module = require(__dirname + '/routes/' + element) //routes里的js接口文件
	router.use('/' + element.replace('.js', ''), module.routes()) //routes里的文件名作为 路由名
})

app.use(cors({
	origin: 
	function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  }, //接受字符串和函数，这里配置的就是允许跨域的域名，如果允许所有域名跨域可传入 *
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST'], //允许请求的方式
	allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //允许接受的头部信息
}))

app
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000)

console.log('app started at port 3000...')
