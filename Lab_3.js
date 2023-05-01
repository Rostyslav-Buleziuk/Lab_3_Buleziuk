let isSubscribed = "user is subscribed";


var barColors = ["red", "green","blue"];


window.onload = setTimeout( function(){
    if (!(document.cookie === isSubscribed)) {
        let modal = document.querySelector("#openModal");
        modal.style.opacity = 1;
        modal.style.pointerEvents = "auto";
    }
}, 3000);

function closeModal(){
    let modal = document.querySelector("#openModal");
    modal.style.display = "none";
}

function subscribe(){
    document.cookie = isSubscribed;
    closeModal();
}

function openCart(){
    let cart = document.querySelector("#cart");
    cart.style.display = "block";

    let inner = "";

    let cartBody = document.querySelector("#cartBody");
    cartArr.forEach(elem => {
        inner += "<div><p>"+elem.name+"</p><img src='"+elem.url+"'></div>";
    });

    cartBody.innerHTML = inner;

    new Chart("myChart", {
        type: "pie",
        data: {
          labels: ["fruits","vegetables","sweets"],
          datasets: [{
            backgroundColor: barColors,
            data: [cartArr.filter(x => x.category == 0).length, cartArr.filter(x => x.category == 1).length, cartArr.filter(x => x.category == 2).length]
          }]
        },
        options: {
          title: {
            display: true,
            text: "Cart"
          }
        }
      });
}

function closeCart(){
    let cart = document.querySelector("#cart");
    cart.style.display = "none";
}

/* Creating Fruits*/


let fruits = [
    {
        name: "banana",
        url: "https://varus.ua/img/product/300/300/127622",
        id: 1
    },
    {
        name: "lemon",
        url: "https://varus.ua/img/product/300/300/127801",
        id: 2
    },
    {
        name: "laura",
        url: "https://fruit-time.ua/images/cache/products/ea/kivano-imp-300x300.jpg",
        id: 3
    },
    {
        name: "granadilla",
        url: "https://nebanan.com.ua/wp-content/uploads/2019/11/granadilla-third-e1602669407123-300x300.jpg",
        id: 4
    },
    {
        name: "apple",
        url: "https://st2.depositphotos.com/7036298/10774/i/600/depositphotos_107748126-stock-photo-fresh-red-apple-with-leaf.jpg",
        id: 5
    },
    {
        name: "grape",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/1200px-Table_grapes_on_white.jpg",
        id: 6
    },
];

function getFruits(){
    let divInfo = document.querySelector("#fruits");
    let inner = "";
    for(let i = 0; i < fruits.length ; i++){
        let img = "<img title='Friuts' src='" + fruits[i].url + "'><button onclick='addProduct(0, "+i+")'>Buy</button>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}


/* Creating Vegetables*/

let vegetables = [
    {
        name: "cabbage",
        url: "https://fruit-time.ua/images/cache/products/36/kapusta__139-300x300.jpg",
        id: 1
    },
    {
        name: "pepper",
        url: "https://delikates.ua/images/product/perech.jpg",
        id: 2
    },
    {
        name: "carrot",
        url: "https://varus.ua/img/product/300/300/147011",
        id: 3
    },
    {
        name: "tomato",
        url: "https://m.dom-eda.com/uploads/images/catalog/item/c6ebcf64ba/e87b941b85_500.jpg",
        id: 4
    },
    {
        name: "onion",
        url: "https://img3.zakaz.ua/src.1598346086.ad72436478c_2020-08-25_Alina/src.1598346086.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",
        id: 5
    },
    {
        name: "potato",
        url: "https://img3.zakaz.ua/upload.version_1.0.df01394534a5cdf85615082c18396db9.1350x1350.jpeg",
        id: 6
    }
];

function getVegetables(){
    let divInfo = document.querySelector("#vegetables");
    let inner = "";
    for(let i = 0; i < vegetables.length ; i++){
        let img = "<img title='Vegetables' src='" + vegetables[i].url + "'><button onclick='addProduct(1, "+i+")'>Buy</button>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}

/* Creating Sweets*/

let sweets = [
    {
        name: "Candy",
        url: "https://hayali.shop/ftp/photos/g210.jpg",
        id: 1
    },
    {
        name: "M & M's",
        url: "https://img.fozzyshop.com.ua/5268-home_default/drazhe-mms-s-shokoladom.jpg",
        id: 2
    },
    {
        name: "Skittles",
        url: "https://img.fozzyshop.com.ua/177488-home_default/drazhe-skittles-originalnye-fruktovye.jpg",
        id: 3
    },
    {
        name: "cake",
        url: "https://media.dyvys.info/2017/11/e0715c007bac84d5c262759c0ac71dc5.jpg",
        id: 4
    },
    {
        name: "cookies",
        url: "https://shefkuhar.com.ua/uploads/posts/2022-03/1646988133_pechivo-z-shokoladnoju-krihtoju.jpg",
        id: 5
    },
    {
        name: "candy",
        url: "https://lukas-sweet.shop/image/cache/catalog/tovari/konfeti/Sharzan-flowpack-1000x1000.jpg",
        id: 6
    },
];

function getSweets(){
    let divInfo = document.querySelector("#sweets");
    let inner = "";
    for(let i = 0; i < sweets.length ; i++){
        let img = "<img title='Sweets' src='" + sweets[i].url + "'><button onclick='addProduct(2, "+i+")'>Buy</button>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}



function addProduct(category, id){
    switch (category){
        case 0: cartArr.push({
            name: fruits.find(x => x.id == id).name, 
            url: fruits.find(x => x.id == id).url, 
            id: id, 
            category: category});
            break;
        case 1: cartArr.push({
            name: vegetables.find(x => x.id == id).name, 
            url: vegetables.find(x => x.id == id).url, 
            id: id, 
            category: category});
            break;
        case 2: cartArr.push({
            name: sweets.find(x => x.id == id).name, 
            url: sweets.find(x => x.id == id).url, 
            id: id, 
            category: category});
            break;
    }
}

let cartArr = [];
