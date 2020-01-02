define(['jquery'], function () {
    class register {
        constructor() {
            this.form = $(".registerForm");
            this.input = $(".registerForm input:lt(3)");//用户名 密码 确认密码
            this.span = $(".registerForm strong");
            this.userid = $($(".registerForm input")[0]);//用户名
            this.userpsd = $($(".registerForm input")[1]);//密码
            this.userpsdagain = $($(".registerForm input")[2]);//重复密码
            this.check = $($(".registerForm input")[3]);//同意协议
            this.idlock = false;
            this.paslock = false;
            this.paslock2 = false;
            this.checklock = false;
            this.protocol = $(".registerForm a");//注册协议a标签
            this.protocolInfo = $("#protocolInfo");//注册协议框
            this.protocolClose = $("#protocolInfo .protocolCont .protocolTitle strong");//注册协议关闭
            this.protocolAgree = $("#protocolInfo .protocolCont .protocolConfirm button");//注册协议同意按钮
        }
        init() {
            this.inputfocus();
            this.inputblur();
            this.protocolfn();
            this.onsubmit();
        }
        inputfocus() {
            this.input.on("focus", function () {//所有输入框聚焦边框变色
                $(this).addClass("active");
            })
        }
        inputblur() {
            let _this = this;
            let password = "";
            this.input.on("blur", function () {//输入框失去焦点边框变色
                $(this).removeClass("active");
            })
            this.userid.on("blur", function () {//用户名验证
                let reg = /^[\w]{4,12}$/;
                if ($(this).val() != "") {
                    if (reg.test($(this).val())) {
                        $.ajax({
                            type: 'post',
                            url: '../php/charge.php',
                            data: {
                                username: $(this).val()
                            }
                        }).done(function (getdata) {//判断用户名是否存在
                            if (!getdata) {
                                $(_this.span[0]).removeClass("warn");
                                $(_this.span[0]).html("√");
                                _this.idlock = true;
                            } else {
                                $(_this.span[0]).addClass("warn");
                                $(_this.span[0]).html("用户名已存在");
                                _this.idlock = false;
                            }
                        })
                    } else {
                        $(_this.span[0]).addClass("warn");
                        $(_this.span[0]).html("请输入4-12位有效用户名");
                        _this.idlock = false;
                    }
                } else {
                    $(_this.span[0]).addClass("warn");
                    $(_this.span[0]).html("用户名不能为空");
                    _this.idlock = false;
                }
            })
            this.userpsd.on("blur", function () {//密码验证
                password = $(this).val();//失去焦点时记录密码
                let reg = /^[\w]{6,12}$/;
                if ($(this).val() != "") {
                    if (reg.test($(this).val())) {
                        $(_this.span[1]).removeClass("warn");
                        $(_this.span[1]).html("√");
                        _this.paslock = true;
                    } else {
                        $(_this.span[1]).addClass("warn");
                        $(_this.span[1]).html("请输入6-12位有效密码");
                        _this.paslock = false;
                    }
                } else {
                    $(_this.span[1]).addClass("warn");
                    $(_this.span[1]).html("密码不能为空");
                    _this.paslock = false;
                }
            })
            this.userpsdagain.on("blur", function () {//重复密码验证
                if ($(this).val() == password) {
                    $(_this.span[2]).removeClass("warn");
                    $(_this.span[2]).html("√");
                    _this.paslock2 = true;
                } else {
                    $(_this.span[2]).addClass("warn");
                    $(_this.span[2]).html("两次输入密码不一致");
                    _this.paslock2 = false;
                }
            })
        }

        protocolfn() {
            let _this = this;
            this.protocol.on("click", function () {//给注册协议a标签添加点击事件
                _this.protocolInfo.show();
            })
            this.protocolClose.on("click", function () {//给注册协议关闭按钮添加关闭事件
                _this.protocolInfo.hide();
            })
            this.protocolAgree.on("click", function () {//给注册协议同意按钮添加事件
                _this.protocolInfo.hide();
                _this.check.prop("checked", true);
            })
        }
        onsubmit() {
            let _this = this;
            this.form.on("submit", function () {
                if (!_this.idlock || !_this.paslock || !_this.paslock2) {//阻止跳转
                    alert("注册信息有误!");
                    return false;
                } else if (!_this.check.prop("checked")) {
                    alert("请同意本站注册协议!");
                    return false;
                }
            })
        }

    }
    new register().init();
    $('#loginHead').load('loginheader.html');
    $('#loginFooter').load('footer.html');


});
