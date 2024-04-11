let form = document.querySelector("#form");
// let loginBtn = document.querySelector("#login");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("button");
let checkUserDetail = JSON.parse(localStorage.getItem("userDetail")) || {};
console.log(checkUserDetail)
form.addEventListener("submit",function(event){
    event.preventDefault()
    if(checkUserDetail.email === email.value && checkUserDetail.password === password.value){
        localStorage.setItem("isAuth","Authenticated");
        window.location.href = "./index.html";
        alert("Login Successful");
    }else{
        alert("Wrong Credentials");
    }
})
btn.addEventListener("click",function(){
    window.location.href = "./signUp.html";
})


