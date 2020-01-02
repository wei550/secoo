define(['jquery'], function () {
    class login {
        constructor() {
            this.tab = $(".ewmtitle li");
            this.tabCont = $(".ewmcont form");
            this.input = $(".ewmcont .psd input:lt(3)");//用户名 密码 验证码input元素
            this.yzmimg = $("#yzmimg");
            this.loginBtn = $("#loginBtn");
            this.rememberMe = $("#rememberMe");
        }
        init() {
            this.tabswitch();
            this.inputfocus();
            this.inputblur();
            this.yzminit();
            this.yzmchange();
            this.onsubmit();
            this.useridinit();
        }
        tabswitch() {//扫码登录和密码登录tab切换
            let _this = this;
            this.tab.on("click", function () {
                $(this).addClass("on").siblings("li").removeClass("on");
                _this.tabCont.eq($(this).index()).show().siblings("form").hide();
            })
        }
        inputfocus() {
            let _this = this;
            this.input.on("focus", function () {//所有输入框聚焦边框变色
                $(this).addClass("active");
            })
            $(this.input[1]).on("focus", function () {//密码框聚焦出现验证码
                $(_this.input[2]).show();
                $(_this.yzmimg).show().css("display", "inline-block");
            })
        }
        inputblur() {
            this.input.on("blur", function () {//输入框失去焦点边框变色
                $(this).removeClass("active");
            })
        }
        useridinit() {
            if (localStorage.getItem('uesrid')) {
                this.input[0].value = localStorage.getItem('uesrid');
                this.rememberMe.prop("checked", true);
            }
        }
        yzminit() {//初始化验证码
            let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            let newarr = [];
            for (let i = 0; i < 4; i++) {
                newarr.push(arr[this.random(0, arr.length - 1)]);
            }
            let str = newarr.join("");
            this.yzmimg.html(str);
        }
        yzmchange() {//点击切换验证码
            let _this = this;
            this.yzmimg.on("click", function () {
                let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                let newarr = [];
                for (let i = 0; i < 4; i++) {
                    newarr.push(arr[_this.random(0, arr.length - 1)]);
                }
                let str = newarr.join("");
                _this.yzmimg.html(str);
            })
        }
        random(a, b) {
            return parseInt(Math.random() * (b - a + 1));
        }
        onsubmit() {
            let _this = this;
            this.loginBtn.on("click", function () {
                if (_this.input[2].value == _this.yzmimg.html()) {
                    $.ajax({
                        type: 'post',
                        url: '../php/charge.php',
                        data: {
                            username: _this.input[0].value,
                            passowrd: _this.input[1].value
                        }
                    }).done(function (getdata) {
                        if (getdata) {
                            if (_this.rememberMe.prop("checked")) {
                                localStorage.setItem('uesrid', _this.input[0].value);
                            } else {
                                localStorage.removeItem('uesrid');
                            }
                            location.href = 'index.html';
                            localStorage.setItem('adminname', _this.input[0].value);
                        } else {
                            alert("用户名或者密码错误");
                        }
                    });
                } else {
                    alert("验证码错误");
                }
            });
        }
    }
    new login().init();
    $('#loginHead').load('loginheader.html');
    $('#loginFooter').load('footer.html');
});

