window.addEventListener("load", function () {
   (function () {
      ajax({
         url: "scIndex.html",
         type: "get",
      }).then(function (result) {
         //当前显示第几张图片
         var i = 0;
         //每张图片的大小
         var LIWIDTH = 988;
         // 每次轮播持续的时间
         var DURATION = 800;
         //li的总个数
         var LICOUNT = 4;
         // 获取要移动的ul
         var ulImgs = document.getElementById("ul-imgs");
         // 每张图片的li
         var liImgs = ulImgs.children;
         // 获取包含小圆点的列表ul
         var ulDots = document.getElementById("ul-dots");
         //获取小圆点的li
         var lis = ulDots.children;
         function moveTo(to) {
            // 如果没有确定跳转到第几张 默认跳转到下一张
            if (to == undefined) {
               to = i + 1;
            }
            //如果滚动从头开始，再重新加上transition
            if (i == 0) {
               if (to > i) {//如果要看当前位置右边的图片 正常顺序执行
                  ulImgs.className = "transition";
               } else {//当i=0，向左边查看图片时，先把transition class去掉
                  ulImgs.className = "";
                  //并将ulImgs拉取到最右侧
                  ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
                  //将回弹效果去掉和加回transition属性的操作强行隔开
                  setTimeout(function () {
                     moveTo(LICOUNT - 1);
                  }, 100);
                  return;
               }
            }
            i = to;            // 将变量i作为to目标位置
            //再用i计算ulImgs的移动距离
            ulImgs.style.marginLeft = -i * LIWIDTH + "px";
            //先删除所有小圆点的class
            for (var li of lis) {
               li.className = "";
            }
            // 图片滑动时淡出淡入的效果
            for (var Img of liImgs) {
               Img.className = "";
            }
            if (i == LICOUNT) {
               i = 0;
               //当transition动画播放完之后,
               setTimeout(function () {
                  ulImgs.className = ";"//才清除transition属性
                  ulImgs.style.marginLeft = 0;//并将ulImgs拉回0位置(第一张图)
               }, 500)
            }
            //z再个当前位置的小圆点添加class active
            lis[i].className = "active";
            // 图片滑动时淡出淡入的效果
            setTimeout(function () {
               liImgs[i].className = "opacity-1";
            }, DURATION)
         }
         // 轮播间隔
         var interval = 3000;//每次轮播之间间隔3秒
         var timer = setInterval(function () {
            moveTo()
         }, interval);
         var banner = document.getElementById("banner");
         // 鼠标进入轮播位置时 停止移动
         banner.onmouseover = function () {
            clearInterval(timer);
         }
         banner.onmouseout = function () {
            timer = setInterval(function () {
               moveTo()
            }, interval);
         }
         // 获取左右点击按钮
         var btnLeft = document.getElementById("btn-left");
         var btnRight = document.getElementById("btn-right");
         // 用开关，控制，上次动画没有播放完，下次动画不能开始！
         var canClick = true;
         //两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
         function move(n) {
            if (canClick) {//只有可以单击时
               moveTo(i + n);//才调用真正移动ul的方法
               canClick = false;//马上把开关关上，禁止再次点击
               //防抖。
               setTimeout(function () {
                  canClick = true;
               }, DURATION + 100);
            }
         }
         btnRight.onclick = function () {
            //调用两个按钮公共的移动方法，正值相当于顺序移动一张
            move(1)
         }
         btnLeft.onclick = function () {
            move(-1);
         }

         // 小圆点跟随
         ulDots.onclick = function (e) {
            if (canClick) {
               var li = e.target;
               if (li.nodeName == "LI") {
                  if (li.className !== "active") {
                     for (var i = 0; i < lis.length; i++) {
                        // 点击的li的小标跟lis的下标一致,就停止i的查询,并将当前的作为moveTo的移动的位置
                        if (lis[i] == li) {
                           break;
                        }
                     }
                     moveTo(i);
                     canClick = false;
                     setTimeout(function () {
                        canClick = true;
                     }, DURATION);
                  }
               }
            }
         }
      })
   })()
})
