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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/SkaiBodyLotion-01.jpg?v=1704274547&width=250",
        title: "PERFUME BODY LOTION FOR MEN & WOMEN",
        name: "SKAI Aquatic Perfume Body Lotion - 200ml",
        rating: 5.0,
        price: 235.00,
        strikedPrice: 325.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6326984c-e89a-43ba-b560-e35d40faba70.jpg?v=1703835295&width=250",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "Luxury OUD Experience Set        ",
        rating: 4.9,
        price: 849.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_d1b2beae-b500-4b0c-9fef-3124a3608391.jpg?v=1703230947&width=250",
        title: "SHOWER GEL COMBO FOR WOMEN",
        name: "Be the 'It' Girl Combo",
        rating: 4.6,
        price: 385.00,
        strikedPrice: 598.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_9d74079f-fbae-40e5-9202-0bf761ca2f76.jpg?v=1703228265&width=250",
        title: "SHOWER GEL COMBO FOR WOMEN AND MEN",
        name: "Better Together Combo",
        rating: 4.9,
        price: 385.00,
        strikedPrice: 449.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/KLUBBodyLotion-01_a641aa85-1c11-4d21-8f56-e71ae5ac388f.jpg?v=1702966449&width=250",
        title: "PERFUME BODY LOTION FOR MEN",
        name: "KLUB Man Perfume Body Lotion - 200ml",
        rating: 4.8,
        price: 235.00,
        strikedPrice: 349.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Glamshowergel-01.jpg?v=1703067258&width=250",
        title: "SHOWER GEL FOR WOMEN",
        name: "GLAM Woman Shower Gel - 500ml",
        rating: 5.0,
        price: 335.00,
        strikedPrice: 499.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/CEOManIntense-01.jpg?v=1701772117&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "CEO Man Intense - 100ml",
        rating: 4.7,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DatewomanBodyLotion-01.jpg?v=1702372768&width=250",
        title: "PERFUME BODY LOTION FOR WOMEN",
        name: "DATE Woman Perfume Body Lotion",
        rating: 4.9,
        price: 235.00,
        strikedPrice: 369.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_5_e74c0ae4-7b10-49bc-a280-4e9bdde7ce24.jpg?v=1696345483&width=250",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "Hot Mess Perfume for Women - 100ml",
        rating: 5.0,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_c00cb947-dade-475f-97a0-bb01a4c9b651.jpg?v=1700138007&width=250",
        title: "WHITE OUD SHOWER GEL 250 ML + WHITE OUD PERFUME 20 ML",
        name: "Win with White Combo",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 796.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_25f79680-b265-4423-b0c2-bdf6af78b69a.jpg?v=1700137801&width=250",
        title: "SKAI AQUATIC SHOWER GEL 250 ML + SKAI AQUATIC PERFUME 20 ML",
        name: "Touch the SKAI Combo",
        rating: 4.8,
        price: 399.00,
        strikedPrice: 699.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_937f4a4a-64b8-4031-811f-4e3de68048e5.jpg?v=1699960465&width=250",
        title: "CEO MAN SHOWER GEL 250 ML + CEO MAN PERFUME 20 ML",
        name: "Men in Black combo for Him",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 697.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_065f669b-8439-4b38-b779-050823e888ce.jpg?v=1700137831&width=250",
        title: "DATE WOMAN SHOWER GEL 250 ML + DATE WOMAN PERFUME 20 ML",
        name: "All Day Romance Combo for Her",
        rating: 4.8,
        price: 399.00,
        strikedPrice: 599.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Klub-Travel-kit-9.jpg?v=1699604664&width=250",
        title: "BATH AND BODY TRAVEL KIT FOR MEN",
        name: "KLUB Man Travel Minis Kit - 275ml",
        rating: 4.9,
        price: 599.00,
        strikedPrice: 899.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_bcd804df-d2f3-45c4-9684-305bfa4cd0e5.jpg?v=1698398251&width=250",
        title: "SHOWER GEL COMBO FOR MEN",
        name: "You The Man Combo - 250ml each",
        rating: 4.9,
        price: 388.00,
        strikedPrice: 599.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_3cb62c5d-863e-4c56-9b51-05cdf63381a2.jpg?v=1698399347&width=250",
        title: "SHOWER GEL COMBO FOR MEN AND WOMEN",
        name: "Power and Pose Combo - 250ml each",
        rating: 4.7,
        price: 385.00,
        strikedPrice: 597.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_ad086eff-439c-446d-b1a8-32313a8ec614.jpg?v=1698398921&width=250",
        title: "SHOWER GEL COMBO FOR ALL",
        name: "Calm before Storm Combo - 250ml each",
        rating: 4.5,
        price: 385.00,
        strikedPrice: 599.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_8.jpg?v=1698670489&width=250",
        title: "SHOWER GEL COMBO FOR MEN AND WOMEN",
        name: "It’s Getting Hot In Here - 250ml each",
        rating: 4.8,
        price: 358.00,
        strikedPrice: 599.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Date-tRavel-Kit-9.jpg?v=1698342542&width=250",
        title: "BATH AND BODY TRAVEL KIT FOR WOMEN",
        name: "DATE Woman Travel Minis Kit - 275ml",
        rating: 5.0,
        price: 599.00,
        strikedPrice: 849.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_3.jpg?v=1698055971&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "SWAG STAR - 100ml",
        rating: 4.5,
        price: 390.00,
        strikedPrice: 499.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDWhite500mlShowerGel-01.jpg?v=1697011866&width=250",
        title: "SHOWER GEL FOR ALL",
        name: "OUD WHITE Shower Gel - 500ml",
        rating: 4.6,
        price: 335.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DateWoman-01.jpg?v=1695109179&width=250",
        title: "DATE SHOWER GEL FOR WOMEN",
        name: "DATE WOMAN Shower Gel - 500ml",
        rating: 4.7,
        price: 335.00,
        strikedPrice: 499.00,
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