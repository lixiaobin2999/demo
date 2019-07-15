window.addEventListener("load", function () {
   var navStay = document.getElementById("navStay");
   var proType = document.getElementById("product-type");
      (function () {
         navStay.addEventListener("mouseover", function (e) {
            var tar=e.target;
            console.log(tar.nodeName)
         })
      })()
}) 