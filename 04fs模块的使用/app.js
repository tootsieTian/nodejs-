/**
 * fs类是nodejs自带的核心类，主要作用是操作文件
 * stat(文件路径，callback)             方法用来判断文件类型
 * mkdir(文件路径，callback)            方法创建目录
 * writefile(文件路径,callback)         创建写入文件
 * appendFile(文件路径，callback)       追加文件，如果文件不存在则创建 
 * readFile(文件路径，callback)         读取文件，需要注意的是，读取的文件内容是16进制的字节符，需要用toString方法转换为字符串
 * readdir(文件路径，callback)          取目录下的所有文件，以数组形式输出
 * rename(文件路径,修改后的文件名或路径 callback)       修改文件信息，可以是文件名，文件路径 
 * rmdir(文件夹路径，callback)          删除文件夹，如果文件夹不为空则会报错
 * unlink(文件路径，callback)           删除文件
*/
 const fs = require('fs');

//判断文件或文件夹是否存在
 fs.stat('./test.html',(err,data)=>{
    if(err){
        //输出错误信息
        console.log(err);
        return;
    }
    //判断是否为文件
    console.log(data.isFile());
    //判断是否为目录
    console.log(data.isDirectory());
});

//创建目录
fs.mkdir('./css',(err)=>{
    if(err){
        //输出错误信息
        console.log(err);
        return;
    }
    console.log('创建成功');
    
})

//  创建写入文件
fs.writeFile('./testWrite.html','我是fs写入方法',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('写入成功');
})

追加文件
fs.appendFile('./testAppend.html','<h1>我追加了字符！</h1>',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('写入成功！');
    
})

// 读取文件
fs.readFile('./testAppend.html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString());
})

// 读取目录下的所有文件，以数组形式输出
fs.readdir('../04fs模块的使用',(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);

})

//  修改文件
fs.rename('./test.html','./css/testrename.html',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('修改成功');
    
})

// 删除目录
fs.rmdir('./cs111s',(err)=>{
    if(err.code === 'ENOTEMPTY'){
        console.log('文件夹不为空');
        return;
    }else if(err.code === 'ENOENT'){
        console.log('文件不存在');
        return;
        
    }
    console.log('删除目录成功');
})

// 删除文件
fs.unlink('./testWrite.html',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除成功');
})