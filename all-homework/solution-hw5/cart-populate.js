class Roll{
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

let cartArray = [];
let priceUpdate = 0;
// let packDict = { 1:1, 3:3, 6:5, 12:10};

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
        if (rollItem.size === packSizeDict[j].name){
            packS = packSizeDict[j].value;
        }
    }
    let finalPrice = (rollItem.basePrice + glaze) * packS;
    console.log(finalPrice)
    // let priceChangeElement = document.querySelector('#priceChange');
    return finalPrice.toFixed(2);
}


// creating Roll objects and adding them to the cart
const ogCinRoll = new Roll("Original", "Sugar Milk", '1', 2.49);
const walnutRoll = new Roll("Walnut", "Vanilla Milk", '12' , 3.49);
const raisinRoll = new Roll("Raisin",  "Sugar Milk", '3', 2.99);
const appleRoll = new Roll("Apple", "Original", '3', 3.49);

cartArray.push(ogCinRoll);
cartArray.push(walnutRoll);
cartArray.push(raisinRoll);
cartArray.push(appleRoll);

console.log(cartArray);

//iterating the objects in the array//
for (const rollItem of cartArray) {
    console.log(rollItem)
    addrollItem(rollItem);
}

function addrollItem(rollItem) {
    // calling and cloning template 
    const template = document.querySelector('.cartTemplate');
    const clone = template.content.cloneNode(true);

    // adding the item to the clone 
    rollItem.element = clone.querySelector('.prodCartDiv');
    // console.log(rollItem.element) 

    const removeBtn = rollItem.element.querySelector('#remove');
    removeBtn.addEventListener('click', () => {
        deleteCartItem(rollItem);
    });

    const cartElement = document.querySelector('.shoppingList');
    cartElement.appendChild(rollItem.element);
    updateDetails(rollItem);
    updateCartTotal();
}


function deleteCartItem(rollItem) {
    const cartElement = document.querySelector('.shoppingList');
    
    // removing the item from the cartArray
    const index = cartArray.indexOf(rollItem);
    if (index !== -1) {
        cartArray.splice(index, 1);
    }

    cartElement.removeChild(rollItem.element);
    updateCartTotal();
}


function updateDetails(rollItem) {
    
    const templateImage = rollItem.element.querySelector(".prodCartImg");
    templateImage.src = "../assets/products/" + rolls[rollItem.type].imageFile;
    
    const templateTitle = rollItem.element.querySelector("#cartTitle");
    templateTitle.innerText = rollItem.type + " Cinnamon roll";

    const templateGlazing = rollItem.element.querySelector("#cartGlazing");
    templateGlazing.innerText = rollItem.glazing;

    const templatePackPrice = rollItem.element.querySelector("#packPrice");
    templatePackPrice.innerText = rollItem.size;
    console.log(templatePackPrice);

    let templateTotalPrice = rollItem.element.querySelector(".totalPrice");
    templateTotalPrice.innerText = calcPric(rollItem);
    // console.log(templateTotalPrice); 
}


function updateCartTotal() {
    let totalPrice = 0;

    // iterating through the cart and updating the cart array 
    for (const rollItem of cartArray) {
        totalPrice = totalPrice + parseFloat(calcPric(rollItem));
    }

    // updating the price displayed //
    const totalElement = document.getElementById('priceRight');
    if (totalElement) {
        totalElement.innerText = totalPrice.toFixed(2);
    }
}