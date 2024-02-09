let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name:'Plain Dosa',
        image:'plain_dosa.jpg',
        price:50
    },
    {
        id:2,
        name:'Masala Dosa',
        image:'masala_dosa.jpg',
        price:55
    },
    {
        id:3,
        name:'Idli',
        image:'idli.jpg',
        price:45
    },
    {
        id:4,
        name:'Gulab Jamoon',
        image:'gulab_jamoon.jpg',
        price:35
    },
    {
        id:5,
        name:'Pani Puri',
        image:'pani_puri.jpg',
        price:30
    },
    {
        id:6,
        name:'Paneer Dosa',
        image:'paneer_dosa.jpg',
        price:60
    },
    {
        id:7,
        name:'Spring Rolls',
        image:'spring_rolls.jpg',
        price:50
    },
    {
        id:8,
        name:'Sambhar Vada Paav',
        image:'sambhar_vada_paav.jpg',
        price:40
    },
    {
        id:9,
        name:'Chowmein',
        image:'chowmein.jpg',
        price:50
    },
    {
        id:10,
        name:'Fried Rice',
        image:'fried_rice.jpg',
        price:70
    },
    {
        id:11,
        name:'Manchurian',
        image:'manchurian.jpg',
        price:100
    },
    {
        id:12,
        name:'Paav Bhaji',
        image:'paav_bhaji.jpg',
        price:50
    },
    {
        id:13,
        name:'Aloo Paneer Tikki',
        image:'aloo_paneer_tikki.jpg',
        price:60
    },
    {
        id:14,
        name:'Tomato Soup',
        image:'tomato_soup.jpg',
        price:55
    },
    {
        id:15,
        name:'Carrot Halwa',
        image:'carrot_halwa.jpg',
        price:60
    },
    {
        id:16,
        name:'Rasmalai',
        image:'rasmalai.jpg',
        price:30
    },
    {
        id:17,
        name:'Veg Biriyani',
        image:'veg_biriyani.jpeg',
        price:90
    },
    {
        id:16,
        name:'Butter Roti',
        image:'butter_roti.jpg',
        price:60
    },
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rs.${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}