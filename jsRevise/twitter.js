function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    var emailval = /^([A-Za-z0-9_\.\-])+\@(([A-Za-z0-9\-])+\.)+([A-Za-z0-9]{2,4})+$/;
    if(email == '' && pass == ""){
        showMsg("Please Provide Credentials");
    }else if(email == ''){
        showMsg("Please Provide Email");
    }else if(!emailval.test(email)){
        showMsg("Please Provide Valid Email");
    }else if(pass == ''){
        showMsg("Please Provide Password");
    }else if(pass.length < 6){
        showMsg("Password should be more than 5 char");
    }else{
        document.getElementById("lblMsg").style.display = 'block';
        document.getElementById("lblMsg").style.color = 'green';
        document.getElementById("lblMsg").innerText = "Login Success, Redirecting in 3 sec...";
    }
}
function showMsg(msg){
    document.getElementById("lblMsg").style.display = 'block';
    document.getElementById("lblMsg").innerText = msg;
}