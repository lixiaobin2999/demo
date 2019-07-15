window.addEventListener("load", function () {

   var userLogin = document.getElementsByClassName("userLogin")[0];
   function act() {
      if (phone.value && upwd.value && iCode.value) {
         userLogin.style.background = "#ff9600";
         userLogin.style.cursor = "pointer";
         userLogin.style.color = "#fff"
         userLogin.disabled = false;
      } else {
         userLogin.style.borderColor = "#c7c7cd"
         userLogin.style.backgroundColor = "#c7c7cd";
         userLogin.style.cursor = "not-allowed";
         userLogin.disabled = true;
      }
   }
   function actived() {
      var phone = document.getElementById("phone");
      var upwd = document.getElementById("upwd");
      var iCode = document.getElementById("iCode");
      userLogin.onload = function () { act() }
      phone.oninput = function () { act() }
      upwd.oninput = function () { act() }
      iCode.oninput = function () { act() }
      phone.focus();
      return iCode;
   }
   actived();
   act();
   window.yzm = "";
   function code() {
      var get_code = document.querySelector("ul>li>[data-id=yzm]");
      var arr = [];
      var num = [];
      for (var i = 0; i <= 9; i++) { arr.push(i) }
      for (var i = 0; i < 26; i++) { arr.push(String.fromCharCode((65 + i))) }
      for (var i = 0; i < 26; i++) { arr.push(String.fromCharCode((97 + i))) }
      for (var i = 0; i < 4; i++) { num.push(arr[Math.floor(Math.random() * arr.length)]) }
      get_code.value = num.join(" ")
      yzm = num.join("");
      get_code.onload = function () { code() };
      get_code.onclick = function () { code() };
   } code()

   var login = document.getElementsByClassName("userLogin")[0];
   login.onclick = function () {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            console.log(result)
            if (result == 400) {
               alert(`手机号未注册`)
            } else if (result == 401) {
               alert(`手机号不能为空`)
            } else if (result == 402) {
               alert(`密码不能为空`)
            } else if (result == 1) {
               alert(`登录成功,点击跳转到首页`)
               location.href = "scIndex.html"
            } else if (result == 0) {
               alert(`登录失败,用户或密码错误`)
            }
         }
      }
      xhr.open("post", "http://127.0.0.1:1200/user/userLogin", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      var formdata = "phone=" + phone.value + "&upwd=" + upwd.value;
      if (iCode.value.toUpperCase() == yzm.toUpperCase()) {
         xhr.send(formdata)
      } else {
         alert(`验证码错误`)
      }
   }
})