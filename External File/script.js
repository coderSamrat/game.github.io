const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

// document.getElementById("signinBtn").addEventListener("click", function check() {
//     var check = func();
//     if (check == 1) {
//         console.log("test")
//         redirect();
//     }
// })
function func(){
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == "admin@gmail.com" && password == "12345678") {
        alert("Login Sucessfully!");
        location.assign("./External File/index2.html");
    } 
    else if(email == "" )
    {
        alert('Please fill in email field')
    }
    else if(password == "" )
    {
        alert('Please fill in password field')
    }
    else 
    {
        alert("Invailid Information!");
    }
    return 0;
}

signupBtn.onclick = function () {
    alert("If you are sure to Sign up then Click Ok!");
    title.innerHTML = "Sign Up";
}