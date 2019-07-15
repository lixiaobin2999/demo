//条款
window.addEventListener("load", function () {

   var iCode = document.getElementById("yzm");
   function actived() {
      var phone = document.getElementById("phone");
      var upwd = document.getElementById("upwd");
      var cpwd = document.getElementById("cpwd");
      var agree = document.getElementById("agree_zc");
      var userReg = document.getElementsByClassName("userReg")[0];
      phone.oninput = function () { act() }
      upwd.oninput = function () { act() }
      cpwd.oninput = function () { act() }
      iCode.oninput = function () { act() }
      agree.onclick = function () { act() }
      phone.focus();
      function act() {
         if (phone.value && upwd.value && iCode.value && agree.checked && cpwd.value) {
            userReg.style.background = "#ff9600";
            userReg.style.cursor = "pointer";
            userReg.style.color = "#fff"
            userReg.disabled = false;
         } else {
            userReg.style.borderColor = "#c7c7cd"
            userReg.style.backgroundColor = "#c7c7cd";
            userReg.style.cursor = "not-allowed";
            userReg.disabled = true;
         }
      }
   } actived();
   //获取验证码
   var get_code = document.querySelector("ul>li>[data-id=yzm]");
   window.yzm = "";
   function code() {
      var arr = [];
      var num = [];
      for (var i = 0; i <= 9; i++) { arr.push(i) }
      for (var i = 0; i < 6; i++) { num.push(arr[Math.floor(Math.random() * arr.length)]) }
      console.log(`本次的短信验证码为:${num.join("")}`)
      yzm = num.join("")
   }
   get_code.onclick = function () { code() };

   //注册ajax
   var reg = document.getElementsByClassName("btn100")[0];
   reg.onclick = function () {
      var layout = /^1[3-9]\d{9}$/
      var $phone = phone.value;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            if (result == 1) {
               alert(`注册成功,点击跳转到登录页面`);
               location.href = "login.html";
            }
            else if (result == 0) { alert(`手机号已注册`) }
            else if (result == 402) { alert(`密码格式不正确,密码为6~15位字母或数字`) }
            else if (result == 403) { alert(`两次输入的密码不一致`) }
         }
      }
      xhr.open("post", "http://127.0.0.1:1200/user/userReg", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var formdata = "phone=" + phone.value + "&upwd=" + upwd.value + "&cpwd=" + cpwd.value;
      if (layout.test($phone)) {
         if (yzm == iCode.value) {
            xhr.send(formdata)
         } else {
            alert(`验证码错误`)
         }
      } else {
         alert("手机号格式不正确")
      }
   }
})