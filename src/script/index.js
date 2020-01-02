define(["jquery", "lazyload"], function () {
    return {
        init:function () {
            class index {
                constructor() {
                    this.productList = $(".editorPickList");
                    this.nextbtn = $(".next");
                    this.prevbtn = $(".prev");
                }
                init() {
                    this.render();
                }
                render() {//渲染
                    let _this = this;
                    $.ajax({
                        type: 'get',
                        url: '../php/editorpick.php',
                        dataType: 'json',
                    }).done(function (getdata) {
                        let strhtml = '';
                        let count = 1;
                        $.each(getdata, function (index, value) {
                            let price = Number(value.pprice).toFixed(2);
                            if (count % 5 == 1) {
                                strhtml += `<ul class="productList">`
                            }
                            strhtml += ` <li>
                                        <a href="details.html?pid=${value.pid}">
                                            <div class="product-img">
                                                <img data-original=${value.ppic} alt="" width="232" height="232" class="lazy">
                                                <div class="product-img-mask"></div>
                                            </div>
                                            <div class="product-details">
                                                <p class="product-name">${value.ptitle}</p>
                                                <p class="product-desc">${value.pdetail}</p>
                                                <div class="line"></div>
                                                <p class="product-price">￥${price}</p>
                                            </div>
                                        </a>
                                    </li>`
                            if (count % 5 == 0) {
                                strhtml += `</ul>`
                            }
                            count++;
                        })
                        let length = Math.ceil(count / 5) + 2;
                        _this.productList.css("width", (length * 1200));
                        _this.productList.html(strhtml);
                        let ul = $(".productList").clone();
                        let firstul = ul[0];
                        let finalul = ul[ul.length - 1];
                        _this.productList.append(firstul);
                        _this.productList.prepend(finalul);
                        _this.lunbo(length);
                        //lazyload插件加载
                        $(function () { //页面加载完成
                            $("img.lazy").lazyload({
                                effect: "fadeIn" //效果方式
                            });
                        });
                    })
                }
               
            }
            $('#Header').load('indexheader.html');
            $('#loginFooter').load('footer.html');
            new index().init();
        }
    }
})




