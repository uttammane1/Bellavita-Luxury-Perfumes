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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6326984c-e89a-43ba-b560-e35d40faba70.jpg?v=1703835295&width=250",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "Luxury OUD Experience Set",
        rating: 4.8,
        price: 849.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WhiteOUD_b00b288c-016d-4071-b71c-f7e9a2cef50f.jpg?v=1698837551&width=300",
        title: "EAU DE PARFUM",
        name: "White Oud Unisex - 100ml",
        rating: 4.7,
        price: 565.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/UnisexPerfumeGiftSet_1.jpg?v=1695204331&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Unisex Perfume Gift Set - 4 x 20mls",
        rating: 4.6,
        price: 549.00,
        strikedPrice: 849.00,

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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/LuxuryCollectionGiftSet-01.jpg?v=1705048050&width=250",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "White Oud Unisex - 100ml",
        rating: 4.6,
        price: 949.00,
        strikedPrice: 1199.00,

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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/D.I.V.A.jpg?v=1693288946&width=250",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "D.I.V.A. Woman - 100ml",
        rating: 4.9,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/SENORITA_239a3020-2072-4cdb-93da-8d2519b69f39.jpg?v=1693289176&width=250",
        title: "EAU DE PARFUM",
        name: "Senorita Woman Perfume - 100ml",
        rating: 4.8,
        price: 515.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=250",
        title: "EAU DE PARFUM",
        name: "BLU Man - 100ml",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/CEOWOMAN_c3390a16-a049-4822-b4b0-781401d274dd.jpg?v=1693288926&width=250",
        title: "EAU DE PARFUM",
        name: "CEO Woman Perfume - 100ml",
        rating: 4.7,
        price: 499.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BestOfMenPerfumeCombo-100mlX3.jpg?v=1693932739&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Best Of Men Perfume Combo - 100ml x 3",
        rating: 4.7,
        price: 1483.00,
        strikedPrice: 2697.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=250",
        title: "EAU DE PARFUM FOR ALL",
        name: "OUD GOLD - 100ml",
        rating: 4.9,
        price: 840.00,
        strikedPrice: 1099.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDParfum.jpg?v=1693289126&width=250",
        title: "PARFUM",
        name: "Oud Unisex Luxury Perfume - 100ml",
        rating: 4.7,
        price: 575.00,
        strikedPrice: 999.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/GlamWoman.jpg?v=1693289036&width=250",
        title: "EAU DE PARFUM",
        name: "Glam Woman Perfume - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_3.jpg?v=1698055971&width=300",
        title: "EAU DE PARFUM FOR MEN",
        name: "SWAG STAR - 100ml",
        rating: 4.9,
        price: 390.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/GOAT.jpg?v=1693288981&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "G.O.A.T. Man - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/IMPACT.jpg?v=1693289075&width=250",
        title: "EAU DE COLOGNE",
        name: "Impact Man Perfume - 100ml",
        rating: 4.7,
        price: 515.00,
        strikedPrice: 899.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Sin_DonDeoCombo.jpg?v=1693930645&width=250",
        title: "UNISEX AND MAN BODY DEODORANTS",
        name: "Sin And Don Deo Combo - 2 x 150ml",
        rating: 4.4,
        price: 299.00,
        strikedPrice: 598.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DarkOUD-01_1.jpg?v=1698064203&width=250",
        title: "EAU DE PARFUM FOR ALL",
        name: "Dark OUD - 100ml",
        rating: 4.9,
        price: 840.00,
        strikedPrice: 1099.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_c00cb947-dade-475f-97a0-bb01a4c9b651.jpg?v=1700138007&width=250",
        title: "WHITE OUD SHOWER GEL 250 ML + WHITE OUD PERFUME 20 ML",
        name: "Win with White Combo",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 748.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_25f79680-b265-4423-b0c2-bdf6af78b69a.jpg?v=1700137801&width=250",
        title: "SKAI AQUATIC SHOWER GEL 250 ML + SKAI AQUATIC PERFUME 20ML",
        name: "Touch the SKAI Combo",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 698.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_937f4a4a-64b8-4031-811f-4e3de68048e5.jpg?v=1699960465&width=250",
        title: "CEO MAN SHOWER GEL 250 ML + CEO MAN PERFUME 20 ML",
        name: "Men in Black combo for Him",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 698.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_065f669b-8439-4b38-b779-050823e888ce.jpg?v=1700137831&width=250",
        title: "DATE WOMAN SHOWER GEL 250 ML + DATE WOMAN PERFUME 20 ML",
        name: "All Day Romance Combo for Her",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 698.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RcbLimitedEditionPerfumeGiftBox_1.jpg?v=1693996065&width=250",
        title: "PERFUME GIFT SET",
        name: "Rcb Limited Edition Perfume Gift Box - 4 x 20ml",
        rating: 4.8,
        price: 549.00,
        strikedPrice: 849.00,
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