let form = document.querySelector("form");
let amountDiv = document.querySelector("#amount")
let cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];
let loginBtn = document.querySelector("#login");
console.log(loginBtn);

let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if(isAuth !== "Authenticated"){
    window.location.href ="./login.html";
}else{
    loginBtn.innerText = "Logout";
    loginBtn.addEventListener("click",function(){
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    })
}
let total = cartItem.reduce(function(accu,el){
    return accu + el.price;
},0)

console.log(total);
// let name = document.querySelector("#name");
// let price = document.querySelector("#price");
// let total = document.querySelector("#total");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("clicked on submit");
    alert("Order Placed")
    amountDiv.innerHTML = "";
})
cartItem.forEach(function(el){
    console.log(el)
    let div = document.createElement("div")
    let h3 = document.createElement("h3");
    h3.innerText = `Name: ${el.name}`;
    let h4 = document.createElement("h4");
    h4.innerText = `Price: ₹${el.price}`;
    h4.style.color = "tomato"

    div.append(h3,h4);
    amountDiv.append(div);
})
let totalDiv = document.createElement("div");
let totalAmount = document.createElement("h4");
totalAmount.innerText = `Total Amount: ₹${total}`;
totalAmount.style.color = "tomato"


totalDiv.append(totalAmount)
amountDiv.append(totalDiv)