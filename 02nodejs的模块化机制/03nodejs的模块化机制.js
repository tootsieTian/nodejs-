
/**
 * nodejs的模块化机制
 * 可以在文件中直接引用node_modules目录里所有包含index.js的文件
 */

 let axios = require('axios');
//这里打印出了axios中index.js中的get方法
axios.get();


/**
 * 如果说不想默认引入的是index.js文件呢？那么就要在node_modules中配置package.json文件
 * 1、切换到要打包的文件目录下
 * 执行npm init --yes
 */

 let db = require('db');
 db.find();