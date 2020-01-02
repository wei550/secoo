define(["jquery"], function () {
    return {
        init: function () {
            $('#Header').load('indexheader.html');
            $('#loginFooter').load('footer.html');
            !function () {
                let tbody = $("#Tbody");
                var strhtml = ``;
                $.ajax({
                    type: 'get',
                    url: '../php/getcart.php',
                    dataType: 'json',
                    data: {
                        userid: localStorage.getItem('adminname')
                    }
                }).done(function (getdata) {
                    if (getdata) {
                        let getdataarr = getdata[0].usercart.split("-");
                        let pidarr = [];
                        let pamount = [];
                        $.each(getdataarr, function (index, value) {
                            let arr = getdataarr[index].split(",");
                            pidarr.push(arr[0]);
                            pamount.push(arr[1]);
                        })
                        let pidstr = pidarr.join(",");
                        $.ajax({
                            type: 'get',
                            url: '../php/cartgetgoods.php',
                            dataType: 'json',
                            data: {
                                pidstr: pidstr
                            }
                        }).done(function (data) {
                            $.each(data, function (index, value) {
                                let price = Number(value.pprice).toFixed(2);
                                strhtml += `<tr>
                            <td>
                                <input type="checkbox" class="checkedd">
                            </td>
                            <td>
                                <div class="cartPic">
                                    <a href="details.html?pid=${value.pid}">
                                        <img src=${value.ppic}></a>
                                </div>
                                <div class="cartTitle">
                                    <p><a href="details.html?pid=${value.pid}">${value.pdetail}</a></p>
                                </div>
                                <div class="cartAttr">
                                    <p>颜色：${value.pcolor} 尺码：${value.psize}</p>
                                </div>
                            </td>
                            <td class="amount">${value.pamount} 件</td>
                            <td><span class="perprice">${price}</span></td>
                            <td>
                                <div class="countNum">
                                    <div class="minus">-</div>
                                    <input class="shownum" type="text" value=${pamount[index]}>
                                    <div class="add">+</div>
                                </div>
                            </td>
                            <td>
                                <strong class="total">${(price * parseInt(pamount[index])).toFixed(2)}</strong>
                            </td>
                            <td valign="top"><a href="javascript:;" class="shanchu" qqq="${value.pid}">删除</a>
                            </td>
                        </tr>`
                            })
                            tbody.html(strhtml);

                            !function () {//全选
                                let chooseAll = $("#choseAll");
                                let choose = $(".cartListMain table tbody .checkedd");
                                chooseAll.on("click", function () {
                                    if ($(this).prop("checked")) {
                                        choose.prop("checked", true);
                                    } else {
                                        choose.prop("checked", false);
                                    }
                                    account();
                                })
                                choose.on("click", function () {
                                    let alreadyChoose = $(".cartListMain table tbody .checkedd:checked");
                                    if (alreadyChoose.length == choose.length) {
                                        chooseAll.prop("checked", true);
                                    } else {
                                        chooseAll.prop("checked", false);
                                    }
                                    account();
                                })
                            }();
                            !function () {//计数
                                let shownum = $(".shownum");
                                let add = $(".add");
                                let minus = $(".minus");
                                let amount = $(".amount");
                                let total = $(".total");
                                let perprice = $(".perprice");
                                let choose1 = $(".checkedd");
                                $.each(add, function (index, value) {
                                    $(value).on("click", function () {
                                        let val = parseInt(shownum.eq(index).val());
                                        if (val < parseInt(amount.eq(index).html())) {
                                            val++;
                                        } else {
                                            val = parseInt(amount.eq(index).html());
                                        }
                                        shownum.eq(index).val(val);
                                        let q = parseFloat(perprice.eq(index).html()) * parseInt(shownum.eq(index).val());
                                        total.eq(index).html(q.toFixed(2));
                                        if (choose1.eq(index).prop("checked")) {
                                            account();
                                        }
                                    })
                                });
                                $.each(minus, function (index, value) {
                                    $(value).on("click", function () {
                                        let val = parseInt(shownum.eq(index).val());
                                        if (val > 1) {
                                            val--;
                                        } else {
                                            val = 1
                                        }
                                        shownum.eq(index).val(val);
                                        let q = parseFloat(perprice.eq(index).html()) * parseInt(shownum.eq(index).val());
                                        total.eq(index).html(q.toFixed(2));
                                        if (choose1.eq(index).prop("checked")) {
                                            account();
                                        }
                                    })
                                });
                                $.each(shownum, function (index, value) {
                                    $(value).on("blur", function () {
                                        let val = parseInt(shownum.eq(index).val());
                                        if (val < 1) {
                                            val = 1;
                                        } else if (val > parseInt(amount.eq(index).html())) {
                                            val = parseInt(amount.eq(index).html());
                                        }
                                        shownum.eq(index).val(val);
                                        let q = parseFloat(perprice.eq(index).html()) * parseInt(shownum.eq(index).val());
                                        total.eq(index).html(q.toFixed(2));
                                        if (choose1.eq(index).prop("checked")) {
                                            account();
                                        }
                                    })
                                });

                            }();
                            !function () {//删除
                                let shanchu = $(".shanchu");
                                let tr = $("tbody tr");
                                $.each(shanchu, function (index, value) {
                                    $(value).on("click", function () {
                                        tr.eq(index).remove();
                                        let qqq = $(this).attr("qqq");
                                        let newarrstr = "";
                                        $.each(pidarr, function (index, value) {
                                            if (value == qqq) {
                                                pidarr.splice(index, 1);
                                                pamount.splice(index, 1);
                                                let newarr = [];
                                                for (let i = 0; i < pidarr.length; i++) {
                                                    newarr[i] = pidarr[i] + "," + pamount[i];
                                                }
                                                newarrstr = newarr.join("-");
                                            }
                                        })
                                        $.ajax({
                                            type: "post",
                                            url: '../php/sendcart.php',
                                            dataType: 'json',
                                            data: {
                                                userid: localStorage.getItem('adminname'),
                                                usercart: newarrstr
                                            }
                                        })
                                        account();
                                    })
                                })
                            }();
                            function account() {//获得结算框数据
                                let shownum = $(".shownum");
                                let total = $(".total");
                                let choose = $(".checkedd");
                                let totalamount = $("#totalamount");
                                let totalprice = $("#totalprice");
                                let accountamount = 0;
                                let accountprice = 0;
                                $.each(choose, function (index, value) {
                                    if (choose.eq(index).prop("checked")) {
                                        accountamount += parseInt(shownum.eq(index).val());
                                        accountprice += parseFloat(total.eq(index).html());
                                    }
                                })
                                totalamount.html(accountamount);
                                totalprice.html(accountprice.toFixed(2))
                            }
                        })
                    }
                })
            }();
        }
    }
})


