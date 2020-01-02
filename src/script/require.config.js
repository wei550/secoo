//主入口文件
require.config({
    baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/',
    paths: {
        'jquery': 'jquery/1.12.4/jquery.min',
        'jqcookie': 'jquery-cookie/1.4.1/jquery.cookie.min',
        'lazyload': 'jquery.lazyload/1.9.1/jquery.lazyload.min'
    }
});
//加载模块
require(["jquery"], function ($) {
    var targetModule = $("#current-page").attr("target-module");
    if (targetModule) {//判断是否存在目标模块
        require([targetModule], function (targetModule) {//加载目标模块
           //全部统一调用init方法
          //也就是每个模块都暴露一个init方法用于事件监听，页面内容加载等
            targetModule.init();
        });
    }
});