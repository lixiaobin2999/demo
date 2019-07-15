(function() {
   var dropdown_box = document.getElementsByClassName("dropdown-box");
   var drop_nav = document.getElementsByClassName("onMouseover");
   
   // for (var i = 0; i < drop_nav.length; i++) {
   // (function (i) {
   drop_nav[0].addEventListener("mouseover", function () {
      dropdown_box[0].style.height="125px"
   }, true)
   // })(i)
   // }
   drop_nav[0].addEventListener("mouseout", function () {
      dropdown_box[0].style.height="0px";
   }, true)
   dropdown_box[0].addEventListener("mouseover", function () {
      dropdown_box[0].style.height="125px"
   }, true)
   dropdown_box[0].addEventListener("mouseout", function () {
      dropdown_box[0].style.height="0px";
   }, true)
})()

