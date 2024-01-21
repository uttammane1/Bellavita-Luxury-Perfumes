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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/NicoLips_f3481a6f-0bc2-49fc-b035-fd7fa47c96cb.jpg?v=1693827867&width=250",
        title: "LIP BRIGHTENING, NOURISHING & REPAIRING",
        name: "Nicolips Lip Brightening Scrub - 20gm",
        rating: 4.8,
        price: 249.00,
        strikedPrice: 450.00

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/eyelift-website.jpg?v=1696575192&width=250",
        title: "UNDER EYE CREAM FOR WOMEN AND MEN",
        name: "Eyelift Under Eye Cream - 20gms",
        rating: 4.6,
        price: 240.00,
        strikedPrice: 325.00,

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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Exfoliate.jpg?v=1693827497&width=250",
        title: "GENTLE EXFOLIATION, NOURISHING & SKIN BRIGHTENING",
        name: "Exfoliate Face And Body Scrub Grit - 75gm",
        rating: 4.9,
        price: 99.00,
        strikedPrice: 275.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/C-GlowFaceCream-50ml.jpg?v=1694079553&width=250",
        title: "BRIGHTENING & ANTI PIGMENTATION",
        name: "C-Glow Face Cream - 50ml",
        rating: 4.2,
        price: 249.00,
        strikedPrice: 375.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/NaturalAntiPollutionCombo.jpg?v=1693922247&width=250",
        title: "C-GLOW FACE WASH & EXFOLIATE FACE & BODY SCRUB",
        name: "Natural Anti Pollution Combo",
        rating: 4.6,
        price: 249.00,
        strikedPrice: 524.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/C-GlowFacePack_1723f778-80d9-4715-ba0b-7362fcf86574.jpg?v=1693919932&width=250",
        title: "SKIN BRIGHTENING & ANTI BLEMISH",
        name: "C-Glow Face Pack - 100gm",
        rating: 4.6,
        price: 249.00,
        strikedPrice: 399.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/insta-bright-website.jpg?v=1696575493&width=250",
        title: "TAN REMOVAL FACE PACK FOR WOMEN AND MEN",
        name: "De Tan Face Pack For Glowing Skin - 100gm",
        rating: 4.7,
        price: 271.00,
        strikedPrice: 399.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/AntiAcneNeemCombo.jpg?v=1693921602&width=250",
        title: "DEEP CLEANSES, CONTROLS ACNE MARKS, REDUCES EXCESS OIL PRODUCTION",
        name: "Anti Acne Neem Combo        ",
        rating: 4.7,
        price: 299.00,
        strikedPrice: 668.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/KumkumadiBrighteningCombo.jpg?v=1693922064&width=250",
        title: "DEEP CLEANSES, REJUVENATES AND NOURISHES",
        name: "Kumkumadi Brightening Combo",
        rating: 4.6,
        price: 249.00,
        strikedPrice: 948.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/AntiAcneFaceWash.jpg?v=1693921385&width=250",
        title: "DEEP CLEANSER, SPOT TREATMENT & PIMPLE REPAIR",
        name: "Anti Acne Face Wash - 100ml        ",
        rating: 4.9,
        price: 149.00,
        strikedPrice: 299.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/NoseGlow-01.jpg?v=1652169791&width=250",
        title: "DEEP CLEANSING & CLARIFYING",
        name: "Noseglow Nose Scrub - 20gm",
        rating: 3.7,
        price: 198.00,
        strikedPrice: 325.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/654.jpg?v=1668147215&width=250",
        title: "PIMPLE SCAR REMOVAL & SKIN CLARIFYING",
        name: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women - 50gm        ",
        rating: 4.9,
        price: 249.00,
        strikedPrice: 399.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/CEOMan500mlShowerGel-01.jpg?v=1692770100&width=250",
        title: "BODY WASH FOR MEN",
        name: "CEO Man Shower Gel - 500ml",
        rating: 4.8,
        price: 335.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/SkaiAquatic500mlShowerGel-01.jpg?v=1694604006&width=250",
        title: "SKAI AQUATIC SHOWER GEL",
        name: "SKAI Aquatic Shower Gel - 500 ml",
        rating: 4.7,
        price: 335.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Skai-Travel-pouch-10_2.jpg?v=1695300843&width=250",
        title: "BATH AND BODY TRAVEL KIT FOR MEN AND WOMEN",
        name: "SKAI Aquatic Travel Minis Kit - 275ml",
        rating: 4.9,
        price: 599.00,
        strikedPrice: 869.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DateWoman-01.jpg?v=1695109179&width=250",
        title: "DATE SHOWER GEL FOR WOMEN",
        name: "DATE WOMAN Shower Gel - 500ml",
        rating: 4.7,
        price: 335.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/NaturalRadianceCombo.jpg?v=1693922321&width=250",
        title: "DEEP CLEANS, REPLENISHES, REJUVENATES",
        name: "Natural Radiance Combo",
        rating: 4.4,
        price: 699.00,
        strikedPrice: 997.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/682.jpg?v=1668763806&width=250",
        title: "MOISTURIZING & NOURISHING",
        name: "Glowtion - Face & Body Lotion - 100m",
        rating: 4.7,
        price: 199.00,
        strikedPrice: 299.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Tinty-Pomegranate-8gm.jpg?v=1694008819&width=250",
        title: "3 IN 1 LIP CHEEK & EYE TINT",
        name: "Tinty - Pomegranate Maroon - 8gm",
        rating: 4.9,
        price: 149.00,
        strikedPrice: 349.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Tinty-PeachyPeach-8gm.jpg?v=1693921845&width=250",
        title: "3 IN 1 LIP CHEEK & EYE TINT",
        name: "Tinty - Peachy Peach - 8gm",
        rating: 4.8,
        price: 149.00,
        strikedPrice: 349.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/CelebshineGold-01_e00fff97-54c2-489f-b054-88b90a7e8cac.jpg?v=1652176140&width=250",
        title: "ILLUMINATE, MOISTURISE, NOURISH",
        name: "Celebshine Body Lotion Gold - 50ml",
        rating: 4.5,
        price: 199.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/Herbal-Sindoor-Red-01.jpg?v=1651698315&width=250",
        title: "LONG LASTING & SMUDGE PROOF",
        name: "Herbal Sindoor - Red - 5ml",
        rating: 4.8,
        price: 129.00,
        strikedPrice: 149.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/products/2.FOP-NoseStrips-Women-6Strips_3632f3f1-01bd-47be-bd37-de64ed7c3feb.jpg?v=1665837737&width=250",
        title: "PAINLESS & INSTANT REMOVAL OF BLACKHEADS, WHITEHEADS, OIL & DIRT",
        name: "Blackhead Remover Strips For Women - 6 Strips        ",
        rating: 1.0,
        price: 199.00,
        strikedPrice: 230.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Dategiftset-01.jpg?v=1705563221&width=250",
        title: "BATH AND BODY GIFT SET FOR WOMEN",
        name: "DATE Woman Premium Gift Set",
        rating: 5.0,
        price: 1320.00,
        strikedPrice: 1949.00,
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