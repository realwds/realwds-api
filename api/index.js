const request = require('request');
const http = require("http");

let server = http.createServer((req,res)=>{
    const start =  0
    const count =  8
    var options = {
      method: 'get',
      url: `http://cn.bing.com/HPImageArchive.aspx?format=js&idx=${start}&n=${count}`
    };
    request(options, function(error, response) {
      console.log(response)
      res.write(response)
    })
    res.statusCode = 200;
    res.setHeader("content-type","text/plain")
    res.end('hahahah')
})

server.listen(3000)
