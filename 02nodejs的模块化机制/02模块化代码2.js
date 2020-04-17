function getUrl(){
    return 'localhost:8077';
}

//以对象形式暴露所有方法
// exports.getUrl = getUrl;

//暴露指定方法
module.exports = getUrl;

/**
 * 模块化，将公共的方法抽离出去，需要用exports语句将方法暴露
 */