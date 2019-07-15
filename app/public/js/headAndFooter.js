
function ajax({ url, type, data, dataType }) {
   return new Promise(function (open, err) {
      //1. 创建xhr对象
      var xhr = new XMLHttpRequest();
      //2.绑定监听事件
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            if (dataType !== undefined && dataType.toLowerCase() === "json")
               var res = JSON.parse(xhr.responseText)
            else
               var res = xhr.responseText
            open(res);
         }
      }
      if (type.toLowerCase() == "get" && data != undefined) {
         url += "?" + data;
      }
      //3.打开连接
      xhr.open(type, url, true);
      if (type.toLowerCase() === "post")
         //增加：设置请求消息头
         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      //4.发送请求
      if (type.toLowerCase() == "post" && data !== undefined)
         xhr.send(data);
      else
         xhr.send(null);
   })
}


(function () {
   ajax({
      url: "header.html",
      type: "get",
   }).then(function (result) {
      var header = document.getElementById("header")
      var head = document.getElementsByTagName("head")[0];
      header.innerHTML = result
      head.innerHTML += `<link rel="stylesheet" href="./css/header.css">`
      var dropdown_box = document.getElementsByClassName("dropdown-box");
      var drop_nav = document.getElementsByClassName("onMouseover");
      drop_nav[0].addEventListener("mouseover", function () {
         dropdown_box[0].style.height = "125px"
      }, true)
      drop_nav[0].addEventListener("mouseout", function () {
         dropdown_box[0].style.height = "0px";
      }, true)
      dropdown_box[0].addEventListener("mouseover", function () {
         dropdown_box[0].style.height = "125px"
      }, true)
      dropdown_box[0].addEventListener("mouseout", function () {
         dropdown_box[0].style.height = "0px";
      }, true)

   });
})();
(function () {
   ajax({
      url: "footer.html",
      type: "get",
   }).then(function (result) {
      var footer = document.getElementById("footer")
      var head = document.getElementsByTagName("head")[0];
      footer.innerHTML = result;
      footer.innerHTML += `<link rel="stylesheet" href="./css/footer.css">`
   })
})();