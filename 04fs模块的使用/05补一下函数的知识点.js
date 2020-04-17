
//匿名自执行函数，通俗地说就是没有名字、可以直接执行的函数；结尾的括号就是调用自己，可以给自己传参
(function(){
    console.log('i am 匿名函数');
    
})();

//闭包：函数外部无法直接读取函数内部的局部变量，so，就是为了让外部读取函数的内部变量，在函数里再定义一个函数
function f1(){
    var a = 1;
    //在f1中在定义一个f2函数，返回a
    function f2(){
        return a;
    }
    return f2;
}
var b = f1();
console.log(b());

