define(["jquery"], function () {
    return {
        init: function () {
            $('#Header').load('indexheader.html');
            $('#loginFooter').load('footer.html');
            !function () {//数据渲染
                let goodsdetail = $(".goodsdetailsMain");
                let getid = location.search.split("=")[1];
                $.ajax({
                    type: 'get',
                    url: '../php/details.php',
                    dataType: 'json',
                    data: {
                        productid: getid
                    }
                }).done(function (getdata) {
                    let strhtml = '';
                    let urls = [];
                    let amount = 0;
                    $.each(getdata, function (index, value) {
                        amount = value.pamount;
                        let price = Number(value.pprice).toFixed(2);
                        urls = value.purls.split(",");
                        $("title").html("寺库网-" + value.ptitle);
                        strhtml = `<div class="goodsdetailsType">
            <span>${value.ptype}</span>&gt;<span>${value.pcategory}</span>&gt;<span>${value.ptitle}</span>
            </div>
            <article>
            <div id="fdj"></div>
            <div class="goodsPic">
                    <ul class="thumbnail">
                      
                    </ul>
                    <div class="normalPic">
                        <img src=${value.ppic} alt="">
                        <div class="picmask"></div>
                    </div>
                </div>
                <div class="goodsInfo">
                    <p class="goodsTitle">${value.pdetail}</p>
                    <hr>
                    <p class="goodsPrice">一口价&nbsp;&nbsp;&nbsp;￥<span>${price}</span></p>
                    <hr>
                    <div class="goodsCSA">
                        <span>颜色:${value.pcolor}</span>
                        <br>
                        <span>尺寸:${value.psize}</span>
                        <br>
                        <span>购买数量:
                        <div class="countNum">
                            <div class="minus">-</div>
                            <input class="shownum" type="text" value="1">
                            <div class="add">+</div>
                            </div>
                            库存${amount}件
                        </span>
                    </div>
                    <a href="javascript:;" id="jrgwc">加入购物车</a>
                </div>
            </article>`;
                    })
                    goodsdetail.html(strhtml);
                    let thumbnail = $(".thumbnail");
                    let str = '';
                    for (let i = 0; i < urls.length; i++) {
                        str += `<li><a href="javascript:;"><img src=${urls[i]} alt=""></a></li>`;
                    }
                    thumbnail.html(str);

                    let thumbnailLi = $(".thumbnail li");
                    let normalPic = $(".normalPic");
                    let fdj = $("#fdj");
                    let minus = $(".minus");
                    let shownum = $(".shownum");
                    let add = $(".add");
                    let jrgwc = $("#jrgwc");
                    let cartsuccess = $("#cartsuccess");
                    let successclose = $("#cartsuccess .close");
                    let successjxgw = $("#detailjxgw");
                    thumbnailLi.on("click", function () {//点击缩略图切换图片
                        normalPic.html(`<img src=${urls[$(this).index()]} alt=""><div class="picmask"></div>`)
                    })
                    normalPic.on("mouseover", function () {//放大镜效果
                        let picmask = $(".normalPic .picmask");
                        fdj.show();
                        picmask.show();
                        fdj.html(normalPic.html());
                        let fdjimg = $("#fdj img");
                        $(this).on("mousemove", function (ev) {
                            var ev = ev || window.event;
                            let l = ev.clientX - normalPic[0].offsetLeft - goodsdetail[0].offsetLeft - picmask[0].offsetWidth / 2;
                            let t = ev.clientY - normalPic[0].offsetTop - goodsdetail[0].offsetTop + document.documentElement.scrollTop - picmask[0].offsetHeight / 2;
                            if (l <= 0) {
                                l = 0;
                            } else if (l >= normalPic[0].offsetWidth - picmask[0].offsetWidth) {
                                l = normalPic[0].offsetWidth - picmask[0].offsetWidth;
                            }
                            if (t <= 0) {
                                t = 0;
                            } else if (t >= normalPic[0].offsetHeight - picmask[0].offsetHeight) {
                                t = normalPic[0].offsetHeight - picmask[0].offsetHeight;
                            }
                            picmask.css("left", l);
                            picmask.css("top", t);
                            fdjimg.css("left", -l * 2);
                            fdjimg.css("top", -t * 2);
                        })
                    })
                    normalPic.on("mouseout", function () {//放大镜效果消失
                        let picmask = $(".normalPic .picmask");
                        fdj.hide();
                        picmask.hide();
                    })
                    shownum.on("blur", function () {//计数
                        let val = parseInt(shownum.val());
                        if (val < 1) {
                            val = 1;
                        } else if (val > amount) {
                            val = amount;
                        }
                        shownum.val(val);

                    })
                    add.on("click", function () {
                        let val = parseInt(shownum.val());
                        if (val < amount) {
                            val++;
                        } else {
                            val = amount;
                        }
                        shownum.val(val);
                    })
                    minus.on("click", function () {
                        let val = parseInt(shownum.val());
                        if (val > 1) {
                            val--;
                        } else {
                            val = 1;
                        }
                        shownum.val(val);
                    })

                    jrgwc.on("click", function () {//加入购物车
                        if (localStorage.getItem('adminname')) {
                            cartsuccess.show();
                            $.ajax({
                                type: 'get',
                                url: '../php/getcart.php',
                                dataType: 'json',
                                data: {
                                    userid: localStorage.getItem('adminname')
                                }
                            }).done(function (getdata) {
                                let usercart = "";
                                if (getdata[0].usercart) {
                                    let getdataarr = getdata[0].usercart.split("-");
                                    let pidarr = [];
                                    let pamount = [];
                                    $.each(getdataarr, function (index, value) {
                                        let arr = getdataarr[index].split(",");
                                        pidarr.push(arr[0]);
                                        pamount.push(arr[1]);
                                    })
                                    for (let i = 0; i < pidarr.length; i++) {
                                        if (pidarr[i] == getid) {
                                            if (parseInt(pamount[i]) + parseInt(shownum.val()) <= amount) {
                                                pamount[i] = parseInt(pamount[i]) + parseInt(shownum.val());
                                                break;
                                            } else {
                                                pamount[i] = amount;
                                                break;
                                            }

                                        } else if (i == pidarr.length - 1) {
                                            pidarr.push(getid);
                                            pamount.push(parseInt(shownum.val()));
                                            break;
                                        }
                                    }
                                    let senddataarr = [];
                                    for (let i = 0; i < pidarr.length; i++) {
                                        senddataarr.push(pidarr[i] + "," + pamount[i]);
                                    }
                                    usercart = senddataarr.join("-");
                                } else {
                                    usercart = `${getid},${amount}`
                                }
                                $.ajax({
                                    type: "post",
                                    url: '../php/sendcart.php',
                                    dataType: 'json',
                                    data: {
                                        userid: localStorage.getItem('adminname'),
                                        usercart: usercart
                                    }
                                })
                            })

                        } else {
                            carterror.style.display = "block";
                        }
                    })
                    successclose.on("click", function () {
                        cartsuccess.hide();
                    })
                    successjxgw.on("click", function () {
                        cartsuccess.hide();
                    })
                })
            }();
        }
    }
});


