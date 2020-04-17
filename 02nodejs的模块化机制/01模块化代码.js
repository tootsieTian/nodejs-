const url = require('url');
const http = require('http');
//导入自定义模块
const urlApi = require('./04模块化2');
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
    //执行模块里的方法
    let baseurl = urlApi.getUrl()
    //打印url
    console.log(baseurl+req.url)
    res.end()
}).listen(8077);

