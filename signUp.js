let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit",function(event){
    event.preventDefault()
    // console.log(name.value,email.value,password.value);
    let userDetail = {
        name: name.value,
        email: email.value,
        password: password.value,
    }
    localStorage.setItem("userDetail",JSON.stringify(userDetail));
})