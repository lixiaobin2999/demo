window.addEventListener("load", function () {
  (function () {
    ajax({
      url: "detail.html",
      type: "get",
    }).then(
      function (result) {
        // 放大镜
        var mask = document.getElementById("mask")
        // 大遮罩层
        var smask = document.getElementById("super-mask");
        // 右侧放大图
        var lgDiv = document.getElementById("div-lg")
        var MSIZE = 150;
        var SMSIZE = 410;
        smask.addEventListener("mouseover", function () {
          mask.style.display = "block";
          //同时显示大div
          lgDiv.style.display = "block";
        });
        smask.addEventListener("mouseout", function () {
          mask.style.display = "none";
          //移出 隐藏
          lgDiv.style.display = "none";
        })
        //让遮罩层跟随鼠标移动
        smask.onmousemove = function (e) {
          var top = e.offsetY - MSIZE / 2;
          var left = e.offsetX - MSIZE / 2;
          //如果top<0,就拉回0, 如果top>SMSIZE-MSIZE，就拉回SMSIZE-MSIZE
          if (top < 0) {
            top = 0;
          } else if (top > SMSIZE - MSIZE) {
            top = SMSIZE - MSIZE;
          }
          //如果left<0,就拉回0, 如果left>SMSIZE-MSIZE，就拉回SMSIZE-MSIZE
          if (left < 0) {
            left = 0;
          } else if (left > SMSIZE - MSIZE) {
            left = SMSIZE - MSIZE;
          }
          // 小遮罩层的位置
          mask.style.top = top + "px";
          mask.style.left = left + "px";
          //同时要修改$lgDiv的背景图片位置：
          lgDiv.style.backgroundPosition = `${-left * 2}px ${-top * 2}px`
        }
      });
    // 购买数量
    var buyCount = document.getElementById("buyCount");
    var add = document.getElementsByClassName("add")[0];
    var cut = document.getElementsByClassName("cut")[0];
    add.addEventListener("click", function () {
      buyCount.value++
    });
    cut.addEventListener("click", function () {
      if (buyCount.value > 1) {
        buyCount.value--;
      }
    })
    // 点击小图片
    // 小图片
    var smImgs = document.querySelectorAll(".slide-nav>li>img");
    var mdImgs = document.querySelectorAll(".md_img>img");
    var lgDiv = document.getElementById("div-lg");
    lgDiv.style.backgroundImage = `url(${mdImgs[0].src}`
    for (var i = 0; i < smImgs.length; i++) {
      (function (i) {
        smImgs[i].addEventListener("click", function (e) {
          for (var j = 0; j < mdImgs.length; j++) {
            mdImgs[j].className = "";
            if (mdImgs[j].getAttribute("data-id") == i) {
              mdImgs[j].className = "active";
              lgDiv.style.backgroundImage = `url(${mdImgs[j].src}`
            }
          }
        })
      })(i)
    }
  })();
}) 
