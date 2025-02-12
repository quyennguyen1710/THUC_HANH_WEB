function dangKy(){
    var ten=document.getElementById("username").value;
    var p1=document.getElementById("pass1").value;
    var p2=document.getElementById("pass2").value;
    if(ten==""){
        alert("Vui lòng nhập tên đăng nhập");
        return false;
    }
    if(p1==""){
        alert("Vui lòng nhập mật khẩu mới");
        return false;
    }
    if(p2==""||p2==""){
        alert("Vui lòng nhập lại mật khẩu mới");
        return false;
    }
    if(p1!=p2){
        alert("Mật khẩu nhập lại không đúng");
        return false;
    }
    else{
        alert("Chúc mừng bạn đã đăng ký thành công");
        return true;
    }
}