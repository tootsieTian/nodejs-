/**
 * 需求：找出文件夹下的所有目录，并存放在数组中
 */



 let fs = require('fs');
 let path = './upload';
 //创建一个空数组，用于存放文件夹名
 var result = [];
 fs.readdir(path,(err,data)=>{
     if(err){
         console.log(err);
         return;
     }
     
     //循环输出当前目录下的文件和文件夹
     //实际上stat方法为异步方法，所以返回的数据是空，这段代码是错的
    //  for(let x in data){
    //     //拼接当前路径
    //     let two_path = `${path}/${data[x]}`;
    //     //判断是否为文件夹
    //     fs.stat(two_path,(err,test)=>{
    //         if(err){
    //             console.log('程序错误');
    //         }  
    //         if(test.isDirectory()){
    //             result.push(data[x]);
    //         }
    //     })
    //  }

    //1、使用匿名自执行函数递归实现
     (function getAir(i){
        if(i === data.length){
            console.log(result);
            return
        }
        
        fs.stat(`${path}/${data[i]}`,(err,status)=>{
            if(err){
                console.log(err);
                return;
            }
            
            if(status.isDirectory()){
                result.push(data[i]);
            }
            getAir(i+1);
        })
     })(0);
    //2、使用 async await实现
    
 })
 

