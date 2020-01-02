define(["jquery"], function () {
    class goodslist {
        constructor() {
            this.ptype = $(".goodsType span");
            this.pul = $("#goodslist .goodslistMain ul");
            this.pagetitle = $("title");
        }
        init() {
            let gettype = location.search.split("=")[1];
            this.pagetitle.html("寺库网-" + gettype);
            $(this.ptype).html(gettype);
            this.render(gettype);
        }
        render(type) {
            let _this = this;
            $.ajax({
                type: 'post',
                url: '../php/goodslist.php',
                dataType: 'json',
                data: {
                    ptype: type
                }
            }).done(function (getdata) {
                let strhtml = `<div class="goodsTitle">
                                <a href="javascript:;" class="on">商城</a>
                                <a href="javascript:;">拍卖</a>
                                </div>
                                <div class="goodsSearch"></div>`;
                $.each(getdata, function (index, value) {
                    let price = Number(value.pprice).toFixed(2);
                    strhtml += `<li>
                                <a href="details.html?pid=${value.pid}">
                                    <img src=${value.ppic} alt="">
                                    <div class="line"></div>
                                    <p>${value.pdetail}</p>
                                    <strong>￥${price}</strong>
                                    <i>库存<span>${value.pamount}</span>件</i>
                                </a>
                            </li>`
                })
                _this.pul.html(strhtml);
            })
        }
    }
    new goodslist().init();
    $('#Header').load('indexheader.html');
    $('#loginFooter').load('footer.html');
});


