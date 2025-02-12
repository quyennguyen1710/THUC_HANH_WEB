
function checkemail(){
    var user = document.getElementById("tk").value;
    var a_cong = user.indexOf("@");
    var doc = user.lastIndexOf(".");
    var mess = document.getElementById("showMessage");
    var Userlength = 5;
  
    if(user == "") 
    {
      mess.innerText = "Nhập email";
      return false;
    }
    else 
    {
      if(user.length < Userlength) 
      {
        mess.innerText = "Chiều dài 4 ký tự";
        return false;
      }
      else 
      {
        if(a_cong < 1 || doc < (a_cong + 2) || (doc + 2) >= user.length)
        {
          mess.innerText = "Email không đúng định dạng";
          return false;
        }
        else
        {
          mess.innerText = "";
          return true;
        }
      }
    }  
  }

function checkPassword() {
    var b = document.getElementById("mk").value;
    var passwordlength = 8;
    var message = document.getElementById("showMessage");
    if (b == '') {
        message.innerText = 'Vui lòng nhập mật khẩu!';
        return false;
    } else {
        if (b.length < passwordlength) {
            message.innerText = 'Chiều dài khoảng 8 kí tự';
            return false;
        } else {
            message.innerText = ' ';
            return true;
        }
    }
}

function eye_on(){
    var x = document.getElementById("icon_mat");
    var y = document.getElementById("mk");

    if (y.type === "password")
    {
        y.type = "text";
        x.classList.remove("fa-eye-slash");
        x.classList.add("fa-eye");
    }
    else 
    {
        y.type = "password";
        x.classList.remove("fa-eye");
        x.classList.add("fa-eye-slash");
    }
}

function dangnhap() {
    if (checkemail() == true && checkPassword() == true) {
        alert("Đăng nhập thành công");
        return true;
    }
    else {
        alert("Đăng nhập thất bại");
        return false;
    }
}
function checkuser() {
    var user = document.getElementById("tdn").value;
    var mess = document.getElementById("showMessage");
    var Userlength = 4;
    if (user == "") {
        mess.innerText = "Nhập tên đăng nhập";
        return false;
    }
    else {
        if (user.length < Userlength) {
            mess.innerText = "Chiều dài 4 ký tự";
            return false;
        }
        else {
            mess.innerText = "";
            return true;
        }
    }
}

function checkPassword2() {
    var b = document.getElementById("rmk").value;
    var a = document.getElementById("mk").value;
    var message = document.getElementById("showMessage");
    if (b == '') {
        message.innerText = 'Vui lòng nhập lại mật khẩu!';
        return false;
    } else {
        if (b != a) {
            message.innerText = 'Mật khẩu không trùng khớp!';
            return false;
        } else {
            message.innerText = ' ';
            return true;
        }
    }
}

function dangky() {
    if (checkuser() == true && checkPassword() == true && checkPassword2() == true) {
        alert("Đăng ký thành công");
        return true;
    }
    else {
        alert("Đăng ký thất bại");
        return false;
    }
}

function xoa() {
    document.getElementById("tdn").value = "";
    document.getElementById("tk").value = "";
    document.getElementById("mk").value = "";
    document.getElementById("rmk").value = "";
    document.getElementById("showMessage").innerText = "";
}