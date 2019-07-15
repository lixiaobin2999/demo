
window.addEventListener("load", function () {
  (function () {
    // 选中的产品
    // 所有单选按钮
    var checks = document.querySelectorAll(".checkEd");
    // 全选按钮 
    var chAll = document.getElementById("checkAll");
    // 点击全选,影响单选
    chAll.onclick = function () {
      var chAll = this;
      for (var check of checks) {
        //每遍历一个check就让他的checked属性和chAll保持一致
        check.checked = chAll.checked;
        if (chAll.checked == true) {
          chAll.classList.add("isChecked");
          check.classList.add("isChecked");
        } else {
          chAll.classList.remove("isChecked");
          check.classList.remove("isChecked");
        }
      }
      total()
    }
    // 数量
    var proValue = document.getElementsByClassName("proValue")
    // 产品数量
    var count = document.getElementsByName("count");
    // 产品小计
    var realPrices = document.getElementsByClassName("realPrice");
    // 折后实际单价
    var nPrices = document.getElementsByClassName("newPrice");
    // 折扣前单价
    var prices = document.getElementsByClassName("price");
    // 商品总金额/折扣前
    var proTotal = document.querySelector(".orderTotalprice>span")
    // 实际付款金额
    var PayTotal = document.querySelector(".payPrice>b");
    // 选中总商品数量
    var totalCount = document.querySelector(".orderCount>span");
    // 折扣总金额
    var onSale = document.querySelector(".orderDiscount>span")
    // 实际付款总金额S
    total()
    for (var i = 0; i < proValue.length; i++) {
      (function (i) {
        // 点击单选按钮,影响全选按钮
        checks[i].onclick = function () {
          var check = this;
          check.classList.add("isChecked");
          if (check.checked == false) {
            chAll.checked = false;
            check.classList.remove("isChecked");
            chAll.classList.remove("isChecked");
          } else {
            var unchecked = document.querySelector(".checkEd:not(:checked)")
            if (unchecked == null) {
              chAll.checked = true;
              check.classList.add("isChecked");
              chAll.classList.add("isChecked");
            }
          }
          total();
        }
        // 现价总额
        var nPrice = parseInt((nPrices[i].innerText).slice(1));
        // 商品小计
        proValue[i].addEventListener("click", function (e) {
          var sum = 0;
          var tar = e.target;
          if (tar.innerHTML == "＋") {
            count[i].value++;
            sum = `${(count[i].value) * nPrice}`;
            realPrices[i].innerText = `¥${sum}`;
          } else if (count[i].value > 1) {
            sum = count[i].value--;
            sum = `${(count[i].value) * nPrice}`;
            realPrices[i].innerText = `¥${sum}`;
          }
          total();
        })
      })(i);
    }
    // 总价计算
    function total() {
      var shamTotal = 0, realTotal = 0, isCheck = 0;
      for (var i = 0; i < proValue.length; i++) {
        if (checks[i].checked == true) {
          realTotal += parseInt((nPrices[i].innerText).slice(1)) * count[i].value;
          shamTotal += parseInt((prices[i].innerText).slice(1)) * count[i].value;
          isCheck += parseInt(count[i].value);
        }
      }
      totalCount.innerText = isCheck;
      proTotal.innerText = shamTotal;
      PayTotal.innerText = realTotal;
      onSale.innerText = shamTotal - realTotal
    }

  })();
})
