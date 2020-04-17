/**
 * 需求：判断服务器上是否存在upload目录，如果没有则创建这个目录，如果有则不进行操作
 */

 const fs = require('fs');
 let path = './uploa';
 
 //判断是文件还是文件夹
 fs.stat(path,(err,data)=>{
    //报错则说明文件或文件夹不存在，执行创建目录   
    if(err){
        fs.mkdir(path,(err)=>{
            if(err){
                console.log("文件夹创建失败");
            }
            console.log('创建成功');
        })
        return;
      }
    //如果文件存在，则删除文件，创建文件夹
    if(data.isFile()){
        fs.unlink(path,(err)=>{
            if(err){
                console.log("文件夹创建失败");
            }
            fs.mkdir(path,(err)=>{
                if(err){
                    console.log('文件创建失败');
                }
                console.log('创建成功！');
                return;
            })
        })
    }else{
        console.log('文件夹已存在！');
    }
    }
 );