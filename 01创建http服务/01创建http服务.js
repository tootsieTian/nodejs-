//引入http模块
const http = require('http');

http.createServer((request,response)=>{
    //获取url
    console.log(request.url);
    //设置响应头，文件类型、字符集
    response.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
    //写入视图
    response.write('<h1>I am Nodejs</h1>');
    //结束响应
    response.end();
}).listen(8088);