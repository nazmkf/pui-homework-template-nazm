class Product {
    constructor (name, price, glazing, pack) {
    this.name = name;
    this.price = price;
    this.glazing = glazing;
    this.pack = pack;
    }
}

let cart = [];
let priceUpdate = 0;

const glazingDict = {
    keep_original: {name:'Keep Original', value: 0},
    sugar_milk: {name:'Sugar milk', value: 0},
    vanilla_milk: {name:'Vanilla Milk', value: 0.5},
    double_chocolate: {name:'Double Chocolate', value: 1.5}
 }
 
 const packSizeDict = {
     one_pack: {name:"1", value: 1},
     three_pack: {name:"3", value: 3},
     six_pack: {name:"6", value: 5},
     twelve_pack: {name:"12", value: 10}
 }

function calcPric(rollItem){
    console.log(rollItem.glazing);
    let glaze = 0;
    let packS = 1;
    for (let i in glazingDict){
        if (rollItem.glazing === glazingDict[i].name){
            glaze = glazingDict[i].value;
        }
    }
    for (let j in packSizeDict){
        if (rollItem.pack === packSizeDict[j].name){
            packS = packSizeDict[j].value;
        }
    }
    let finalPrice = (rollItem.price + glaze) * packS;
    console.log(finalPrice)
    // let priceChangeElement = document.querySelector('#priceChange');
    return finalPrice.toFixed(2);
}

retrieveFromLocalStorage();

console.log(cart);

//iterating the objects in the array//
for (const rollItem of cart) {
    console.log(rollItem)
    addrollItem(rollItem);
}

function addrollItem(rollItem) {
    // calling and cloning template 
    const template = document.querySelector('.cartTemplate');
    const clone = template.content.cloneNode(true);

    // adding the item to the clone 
    rollItem.element = clone.querySelector('.prodCartDiv');

    const removeBtn = rollItem.element.querySelector('#remove');
    removeBtn.addEventListener('click', () => {
        deleteCartItem(rollItem);
    });

    const cartElement = document.querySelector('.shoppingList');
    cartElement.appendChild(rollItem.element);
    updateDetails(rollItem);
    updateCartTotal();
    saveToStorage();
}


function deleteCartItem(rollItem) {
    const cartElement = document.querySelector('.shoppingList');
    
    // removing the item from the cartArray
    const index = cart.indexOf(rollItem);
    if (index !== -1) {
        cart.splice(index, 1);
    }

    cartElement.removeChild(rollItem.element);
    updateCartTotal();
    saveToStorage();
}


function updateDetails(rollItem) {
    
    const templateImage = rollItem.element.querySelector(".prodCartImg");
    templateImage.src = "../assets/products/" + rolls[rollItem.name].imageFile;
    
    const templateTitle = rollItem.element.querySelector("#cartTitle");
    templateTitle.innerText = rollItem.name + " Cinnamon roll";

    const templateGlazing = rollItem.element.querySelector("#cartGlazing");
    templateGlazing.innerText = rollItem.glazing;

    const templatePackPrice = rollItem.element.querySelector("#packPrice");
    templatePackPrice.innerText = rollItem.pack;
    console.log(templatePackPrice);

    let templateTotalPrice = rollItem.element.querySelector(".totalPrice");
    templateTotalPrice.innerText = calcPric(rollItem);
}


function updateCartTotal() {
    let totalPrice = 0;

    // iterating through the cart and updating the cart array 
    for (const rollItem of cart) {
        totalPrice = totalPrice + parseFloat(calcPric(rollItem));
    }

    // updating the price displayed //
    const totalElement = document.getElementById('priceRight');
    if (totalElement) {
        totalElement.innerText = '$ ' + totalPrice.toFixed(2);
    }
}

function saveToStorage() {
    const cardArrayString = JSON.stringify(cart);
    localStorage.setItem("cartStorage", cardArrayString);
    console.log(cardArrayString);
}
  
function retrieveFromLocalStorage() {
    const cardArrayString = localStorage.getItem("cartStorage");
    const cartArrayTemp = JSON.parse(cardArrayString);
    for (const cartData of cartArrayTemp) {
        cart.push(cartData);
    }
    console.log(cardArrayString);
}