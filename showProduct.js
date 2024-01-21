let loginBtn = document.querySelector("#login");
// console.log(loginBtn);
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

let svgArr = [
    {
        imageUrl:"https://bellavitaorganic.com/cdn/shop/files/Long_Lasting_1_70a277fc-8142-4cfb-b036-fc4084c6cee5.svg?crop=center&height=40&v=1694673851&width=40",
        title:"LONG LASTING"
    },
    {
        imageUrl:"https://bellavitaorganic.com/cdn/shop/files/ifra_1.svg?crop=center&height=40&v=1694674058&width=40",
        title:"IFRA - CERTIFIED"
    },
    {
        imageUrl:"https://bellavitaorganic.com/cdn/shop/files/Imported_Oils_1.svg?crop=center&height=40&v=1694674059&width=40",
        title:"IMPORTED OILS"
    },
    {
        imageUrl:"https://bellavitaorganic.com/cdn/shop/files/made_in_india.svg?crop=center&height=40&v=1694092823&width=40",
        title:"MAKE IN INDIA"
    },
]
let product = JSON.parse(localStorage.getItem("showProduct")) || {};
console.log(product)

let imgDiv = document.querySelector("#imgDiv");
let detailDiv = document.querySelector("#detailsDiv");
// console.log(img, detail)

let img = document.createElement("img");
img.src = product.imageUrl;

let h2 = document.createElement("h2");
h2.innerText = product.name;
h2.style.marginBottom = "0"

let p1 = document.createElement("p");
p1.innerText = product.title;
p1.style.color = "grey";
p1.style.margin = "0px"

// let p2 = document.createElement("p");
let ratingDiv = document.createElement("div");
ratingDiv.setAttribute("class", "rating")
let ratingP = document.createElement("p");
ratingP.setAttribute("class", "material-icons")
ratingP.innerText = "star"
let p2 = document.createElement("p");
p2.innerText = product.rating;

let p3 = document.createElement("p");
p3.innerText = `Price:₹${product.price}`;
p3.style.color = "tomato";
p3.style.fontSize = "20px";
p3.style.fontWeight = "bold";
p3.style.margin = "0";

let p4 = document.createElement("p");
p4.innerText = `M.R.P.:  ₹${product.strikedPrice}`;
p4.style.color = "grey";
p4.style.marginTop = "0px";
p4.style.textDecoration = "line-through";

let btn = document.createElement("button");
btn.innerText = "ADD TO CART";
btn.addEventListener("click",function(){
    alert("Added to Cart")
    addToCart(product);
})
let svgDiv = document.createElement("div");
svgDiv.setAttribute("id","svg")


let para = document.createElement("p");
para.innerText ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";



svgArr.forEach(function(el){
    let div = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = el.imageUrl;
    let p = document.createElement("p");
    p.innerText = el.title;

    div.append(img2,p)
    svgDiv.append(div)
})

// console.log(product.imageUrl)

ratingDiv.append(ratingP, p2)
imgDiv.append(img)
detailDiv.append(h2,p1,ratingDiv,p3,p4,btn,svgDiv,para)

function addToCart(el){
    // console.log(el);
    let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartArr.push(el);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
}