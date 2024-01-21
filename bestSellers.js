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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1695204946&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Men",
        rating: 4.4,
        price: 549.00,
        strikedPrice: 849.00

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=250",
        title: "EAU DE PARFUM FOR ALL",
        name: "OUD GOLD - 100ml",
        rating: 4.8,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/CEOMAN_3b131d25-7893-4ad5-a17a-4b3de9a3ebd3.jpg?v=1693290059&width=250",
        title: "EAU DE PARFUM",
        name: "CEO Man Luxury Perfume - 100ml",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Women",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/UnisexPerfumeGiftSet_1.jpg?v=1695204331&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Unisex Perfume Gift Set",
        rating: 4.6,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WhiteOUD_b00b288c-016d-4071-b71c-f7e9a2cef50f.jpg?v=1698837551&width=250",
        title: "EAU DE PARFUM",
        name: "White Oud Unisex - 100ml",
        rating: 4.7,
        price: 565.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DATEWOMAN.jpg?v=1693290911&width=250",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "Date Woman Perfume - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BestOfMenPerfumeCombo-100mlX3.jpg?v=1693932739&width=250",
        title: "PERFUME COMBO",
        name: "Best Of Men Perfume Combo",
        rating: 4.7,
        price: 1549.00,
        strikedPrice: 2697.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/GlamWoman.jpg?v=1693289036&width=250",
        title: "EAU DE PARFUM",
        name: "Glam Woman Perfume ",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BLUMAN.jpg?v=1693827097&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "BLU Man - 100ml",
        rating: 4.6,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDParfum.jpg?v=1693289126&width=250",
        title: "PARFUM",
        name: "Oud Unisex Luxury Perfume - 100ml",
        rating: 4.7,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/KLUBMan.jpg?v=1693289090&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Klub Man - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DeoParfumPackof3-01_e183c74a-e406-47e6-87af-38151cded229.jpg?v=1695649691&width=250",
        title: "BODY DEODORANT FOR MEN",
        name: "Men's No Gas Deodorant Gift Set",
        rating: 4.8,
        price: 599.00,
        strikedPrice: 747.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/HoneyOUD_68b92490-5598-445c-a661-4a2d978e9893.jpg?v=1693289057&width=250",
        title: "PARFUM",
        name: "Honey Oud Unisex Perfume - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 999.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Skai_2e0d54be-3ab0-458b-a2af-47d666c93e0e.jpg?v=1693289226&width=250",
        title: "EAU DE COLOGNE",
        name: "Skai Aquatic Unisex Perfume - 100ml",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 699.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Exfoliate.jpg?v=1693827497&width=250",
        title: "GENTLE EXFOLIATION, NOURISHING & SKIN BRIGHTENING",
        name: "Exfoliate Face And Body Scrub Grit - 75gm",
        rating: 4.9,
        price: 99.00,
        strikedPrice: 275.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/C-GlowFaceWash.jpg?v=1693827395&width=250",
        title: "DE-TAN & BRIGHTENING",
        name: "C-Glow Face Wash - 100ml",
        rating: 4.8,
        price: 175.00,
        strikedPrice: 249.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/eyelift-website.jpg?v=1696575192&width=250",
        title: "UNDER EYE CREAM FOR WOMEN AND MEN",
        name: "C-Glow Face Wash - 100ml",
        rating: 4.8,
        price: 240.00,
        strikedPrice: 325.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/NicoLips_f3481a6f-0bc2-49fc-b035-fd7fa47c96cb.jpg?v=1693827867&width=250",
        title: "LIP BRIGHTENING, NOURISHING & REPAIRING",
        name: "Nicolips Lip Brightening Scrub - 20gm",
        rating: 4.8,
        price: 249.00,
        strikedPrice: 450.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/AyurvedicKumkumadiFaceOil.jpg?v=1694081134&width=250",
        title: "SKIN BRIGHTENING & HYDRATING OIL FOR YOUTHFUL SKIN",
        name: "Ayurvedic Kumkumadi Face Oil - 30ml",
        rating: 4.9,
        price: 249.00,
        strikedPrice: 599.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Perfume-Trial-Pack-_10-5ml.jpg?v=1693930900&width=250",
        title: "PACK OF 10 X 5ML PERFUMES.",
        name: "Luxury Perfume Trial Pack",
        rating: 4.8,
        price: 349.00,
        strikedPrice: 399.00,
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
        rating: 4.3,
        price: 349.00,
        strikedPrice: 398.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/654.jpg?v=1668147215&width=250",
        title: "PIMPLE SCAR REMOVAL & SKIN CLARIFYING",
        name: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women - 50gm",
        rating: 4.9,
        price: 249.00,
        strikedPrice: 399.00,
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