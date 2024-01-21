let btns = document.querySelectorAll("#crazy-deals-container button")
let loginBtn = document.querySelector("#login");
let isAuth = localStorage.getItem("isAuth") || "Not Authenticated"
if(isAuth !== "Authenticated"){
    loginBtn.innerText = "Login";
}else{
    loginBtn.innerText = "Logout";
    loginBtn.addEventListener("click",function(){
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    })
}
btns.forEach(function(el){
    // console.log(el);
    el.addEventListener("click",function(){
        window.location.href = "./bestSellers.html";
    })
})
