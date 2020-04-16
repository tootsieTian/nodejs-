//导入url解析类
const url = require('url');
let api = 'http://www.baidu.com?name=zhangsan&age=19';
//接收url传过来的信息，并将数据转化为json格式
// console.log(url.parse(api,true));
let data = url.parse(api,true).query;
//es6语法 模板字符串 要用 ``才可以使用
console.log(`姓名：${data.name}--年龄：${data.age}`);
