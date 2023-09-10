const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

signinBtn.onclick = function () {
    title.innerHTML = "Sign In";
}
function func(){
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('text').value;

    if (email == "admin@gmail.com" && password == "12345678" && text =="samrat") {
        alert("Sign Up Sucessfully!");
        location.assign("index2.html");
    } else {
        alert("Invailid Information!")
    }
}


