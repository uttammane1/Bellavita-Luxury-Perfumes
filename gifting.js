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

let arrData = [
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Dategiftset-01.jpg?v=1705563221&width=300",
        title: "BATH AND BODY GIFT SET FOR WOMEN",
        name: "DATE Woman Premium Gift Set",
        rating: 5.0,
        price: 1320.00,
        strikedPrice: 1699.00

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/LuxuryCollectionGiftSet-01.jpg?v=1705048050&width=300",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "Luxury Experience Gift Set",
        rating: 4.6,
        price: 949.00,
        strikedPrice: 1199.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6326984c-e89a-43ba-b560-e35d40faba70.jpg?v=1703835295&width=300",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "Luxury OUD Experience set",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1695204946&width=300",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Women",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=300",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Women - 4 x 20mls",
        rating: 4.6,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/UnisexPerfumeGiftSet_1.jpg?v=1695204331&width=300",
        title: "EAU DE PARFUM",
        name: "Luxury Unisex Perfume Gift Set - 4 x 20mls",
        rating: 4.6,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RcbLimitedEditionPerfumeGiftBox_1.jpg?v=1693996065&width=300",
        title: "PERFUME GIFT SET",
        name: "Rcb Limited Edition Perfume Gift Box - 4 x 20ml",
        rating: 4.8,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BestOfMenPerfumeCombo-100mlX3.jpg?v=1693932739&width=300",
        title: "PERFUME COMBO",
        name: "Best Of Men Perfume Combo",
        rating: 4.7,
        price: 1483.00,
        strikedPrice: 2697.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_4_a900c1a7-9f63-44c4-a294-a87562b072bf.jpg?v=1696315519&width=300",
        title: "BATH AND BODY GIFTING SET FOR MEN AND WOMEN",
        name: "SKAI Aquatic Gift Set ",
        rating: 4.7,
        price: 1320.00,
        strikedPrice: 1699.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Skai-Travel-pouch-10_2.jpg?v=1695300843&width=300",
        title: "BATH AND BODY TRAVEL KIT FOR MEN AND WOMEN",
        name: "SKAI Aquatic Travel Minis Kit - 275ml",
        rating: 4.9,
        price: 599.00,
        strikedPrice: 869.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Date-tRavel-Kit-9.jpg?v=1698342542&width=300",
        title: "BATH AND BODY TRAVEL KIT FOR WOMEN",
        name: "DATE Woman Travel Minis Kit - 275ml",
        rating: 5.0,
        price: 599.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DEOGiftSetPackof4.jpg?v=1693931505&width=300",
        title: "SET OF 4 BODY DEOS FOR MEN",
        name: "Deo Gift Set - Stud, Fyre, Fresh And Game Pack Of 4 x 150ml",
        rating: 4.2,
        price: 499.00,
        strikedPrice: 1196.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Perfume-Trial-Pack-_10-5ml.jpg?v=1693930900&width=300",
        title: "PACK OF 10 X 5ML PERFUMES.",
        name: "Luxury Perfume Trial Pack - 10 x 5mls",
        rating: 4.8,
        price: 349.00,
        strikedPrice: 399.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/It_s-your-choice-combo.jpg?v=1693931122&width=300",
        title: "UNISEX GIFT SET",
        name: "It'S Your Choice Combo",
        rating: 4.5,
        price: 1449.00,
        strikedPrice: 2797.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/CEO-pouch-listing-10.jpg?v=1695205020&width=300",
        title: "BATH AND BODY TRAVEL KIT FOR MEN",
        name: "CEO Man Travel Minis Kit",
        rating: 4.8,
        price: 599.00,
        strikedPrice: 899.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/EverreadyWomenCombo.jpg?v=1693931485&width=300",
        title: "5 PREMIUM FEMININE SCENTS",
        name: "Everready Women Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4695.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Work-_-play-combo.jpg?v=1693930256&width=300",
        title: "PERFUME COMBO",
        name: "Work & Play Combo",
        rating: 4.5,
        price: 1298.00,
        strikedPrice: 2497.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/all-for-women-combo.jpg?v=1693932649&width=300",
        title: "PERFUME COMBO",
        name: "All For Women Combo",
        rating: 4.7,
        price: 1399.00,
        strikedPrice: 2797.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RefreshingYouCombo.jpg?v=1693930765&width=300",
        title: "FAMILY COMBO",
        name: "Refreshing You Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4595.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DeoParfumPackof3-01_e183c74a-e406-47e6-87af-38151cded229.jpg?v=1695649691&width=300",
        title: "BODY DEODORANTS FOR MEN",
        name: "Men`s No Gas Deodorants Gift Set",
        rating: 4.8,
        price: 599.00,
        strikedPrice: 747.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Perfume-Trial-Pack-_10-5ml.jpg?v=1693930900&width=250",
        title: "PACK OF 10 X 5ML PERFUMES.",
        name: "Luxury Perfume Trial Pack",
        rating: 4.2,
        price: 499.00,
        strikedPrice: 849.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/EverreadyWomenCombo.jpg?v=1693931485&width=250",
        title: "5 PREMIUM FEMININE SCENTS",
        name: "Everready Women Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4695.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RefreshingYouCombo.jpg?v=1693930765&width=250",
        title: "FAMILY COMBO",
        name: "Refreshing You Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4595.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/LoveIsInTheRoll-OnCombo.jpg?v=1693922129&width=250",
        title: "ROLL ON DEO - MEN & WOMEN",
        name: "Love Is In The Roll-On Combo",
        rating: 4.6,
        price: 349.00,
        strikedPrice: 398.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/UnisexPerfumeGiftSet_1.jpg?v=1695204331&width=300",
        title: "EAU DE PARFUM",
        name: "Luxury Unisex Perfume Gift Set - 4 x 20mls",
        rating: 4.7,
        price: 549.00,
        strikedPrice: 949.00,
    },
];


let container = document.querySelector("#content");
let productNumber = document.querySelector("#productNumber");
productNumber.innerText = `${arrData.length} products`;


function appendData(arrData){
    container.innerHTML = "";
arrData.forEach(function(el){
    // console.log(el);
    let productDiv = document.createElement("div");
    let img = document.createElement("img")
    img.src=el.imageUrl;
    img.style.cursor = "pointer";
    img.addEventListener("click",function(){
        showProduct(el);
        // console.log(el);
    })
    let p1 = document.createElement("p")
    p1.innerText = el.title
    let h4 = document.createElement("h4");
    h4.innerText = el.name;
    h4.setAttribute("class","hide-text")
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class","rating")
    let ratingP = document.createElement("p");
    ratingP.setAttribute("class","material-icons")
    ratingP.innerText = "star"
    let p2 = document.createElement("p");
    p2.innerText = el.rating;
    let span1 = document.createElement("span");
    span1.innerText = `₹${el.price}`
    let span2 = document.createElement("span");
    span2.innerText = `₹${el.strikedPrice}`;
    span2.style.textDecoration = "line-through";
    let btn = document.createElement("button")
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click",function(){
        alert("Added to cart");
        addToCart(el);
    })  

    ratingDiv.append(ratingP,p2)
    productDiv.append(img,p1,h4,ratingDiv,span1,span2,btn);
    container.append(productDiv);
})

}
appendData(arrData)

let select = document.querySelector("#sort");
select.addEventListener("change",function(){
    arrData.sort(function(a,b){
        if(select.value == "lowToHigh"){
            return(a.price - b.price)
        }
        else if(select.value == "highToLow"){
            return(b.price - a.price);
        }
    })
    appendData(arrData);
})


function showProduct(el){
    localStorage.setItem("showProduct",JSON.stringify(el));
    window.location.href = "./showProduct.html";
}
function addToCart(el){
    // console.log(el);
    let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartArr.push(el);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
}
// console.log(newArr)