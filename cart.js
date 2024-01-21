let container = document.querySelector("#cart-container");
let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
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

let h2 = document.querySelector("h2");
let chekoutBtn = document.querySelector("#checkoutBtn");
chekoutBtn.addEventListener("click",function(){
    window.location.href = "./checkOut.html";
})

//Aparna code 


//Aparna code end

// console.log(cartArr);
cartTotal(cartArr)
function cartTotal(cartArr){
    let total = cartArr.reduce(function(accu,el){
        return accu + el.price;
    },0)
    h2.innerText = `Total Amount:- ₹${total}`
}
cartArr.forEach(function (el) {
    let flexDiv = document.createElement("div");
    flexDiv.setAttribute("class","flex-div");

    let imgDiv = document.createElement("div"); //#imgDiv
    imgDiv.setAttribute("id","imgDiv");

    let detailDiv = document.createElement("div"); //#detailsDiv
    detailDiv.setAttribute("id","detailsDiv");
    // console.log(img, detail)

    let img = document.createElement("img");
    img.src = el.imageUrl;

    let h2 = document.createElement("h2");
    h2.innerText = el.name;
    h2.style.marginBottom = "0"

    let p1 = document.createElement("p");
    p1.innerText = el.title;
    p1.style.color = "grey";
    p1.style.margin = "0px"

    // let p2 = document.createElement("p");
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "rating")
    let ratingP = document.createElement("p");
    ratingP.setAttribute("class", "material-icons")
    ratingP.innerText = "star"

    let p2 = document.createElement("p");
    p2.innerText = el.rating;

    let p3 = document.createElement("p");
    p3.innerText = `Price:₹${el.price}`;
    p3.style.color = "tomato";
    p3.style.fontSize = "20px";
    p3.style.fontWeight = "bold";
    p3.style.margin = "0";

    let p4 = document.createElement("p");
    p4.innerText = `M.R.P.:  ₹${el.strikedPrice}`;
    p4.style.color = "grey";
    p4.style.marginTop = "0px";
    p4.style.textDecoration = "line-through";

    let btn = document.createElement("button");
    btn.innerText = "REMOVE ITEM";
    btn.addEventListener("click", function () {
        removeItem(el.imageUrl);
        window.location.reload();
    })

    ratingDiv.append(ratingP, p2)
    imgDiv.append(img)
    detailDiv.append(h2, p1, ratingDiv, p3, p4, btn)
    flexDiv.append(imgDiv,detailDiv);
    container.append(flexDiv);
})

function removeItem(image){
    cartArr = cartArr.filter(function(el){
        return el.imageUrl !== image;
    })
    // console.log(cartArr);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
}

