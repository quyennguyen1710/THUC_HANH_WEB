function Reset(){
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("kq").value = null;
    document.getElementById("log").innerText = "";
}

//---hàm tính tổng
function Sum(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var s = a + b;
    check(a, b, s);
}

//---hàm trừ
function Signal(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var s = a - b;
    check(a, b, s);
}

//---hàm nhân
function Multiply(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var s = a * b;
    check(a, b, s);
}


//Ham chia 2 so
function Divide(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    // kiem tra xem b=0?
    if(b == 0){
        document.getElementById("log").innerText = "Vui lòng nhập b khác 0!";
        document.getElementById("b").value = null;
        document.getElementById("kq").value = null;
    }
    else{
        // neu a va b la nguyen --> a/b = so nguyen va bo phan du
        var d = parseFloat(a) / parseFloat(b);
        check(a, b, d);
    }
}

// Hàm kiểm tra các giá trị có phải là số hay không 
function check(a, b, c){
    // c là giá trị số
    if(!isNaN(c)){
        document.getElementById("kq").value = c;
        document.getElementById("log").innerText = "";
    }
    else{
        // kiểm tra xem a và b không phải là số 
        if(isNaN(a) && isNaN(b)){
            document.getElementById("log").innerText = "Vui lòng nhập a và b ở dạng giá trị số!";
            document.getElementById("a").value = null;
            document.getElementById("b").value = null;
            document.getElementById("kq").value = null;
        }
        else if(isNaN(a)){
            document.getElementById("log").innerText = "Vui lòng nhập a ở dạng giá trị số!";
            document.getElementById("a").value = null;
            document.getElementById("kq").value = null;
        }
        else{
            document.getElementById("log").innerText = "Vui lòng nhập b ở dạng giá trị số!";
            document.getElementById("b").value = null;
            document.getElementById("kq").value = null;
        }  
    }
}
