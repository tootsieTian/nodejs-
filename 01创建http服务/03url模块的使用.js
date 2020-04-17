const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
    res.write('I am nodejs');
    //这里判断传过来的url链接
    if(req.url != '/favicon.ico'){
        console.log(req.url);
        //接收链接里的数据
        let data = url.parse(req.url,true).query;
        console.log(data.username);
    }
    res.end();
}).listen(8077);