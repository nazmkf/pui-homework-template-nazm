
class Product {
    constructor (name, price, glazing, pack) {
    this.name = name;
    this.price = price;
    this.glazing = glazing;
    this.pack = pack;
    }
}

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

// creating an object for the class //
let originalCinRoll = new Product ('Original Cinnamon Roll' , 2.49, 0, 1);


let selectGlazing = document.querySelector('#glazing');
let selectPackSize = document.querySelector('#packSize');

let selectedGlaze = 0;
let selectedPack = 1;
function updateGlazing (){
    originalCinRoll.glazing = parseFloat(this.value);
    selectedGlaze = originalCinRoll.glazing;
    calcPric();
}

function updatePackSize (){
    originalCinRoll.pack = parseFloat(this.value);
    selectedPack = originalCinRoll.pack;
    calcPric();
    // displayPrice(calcPric(originalCinRoll));
}

//function to calculate the price//
function calcPric(){
    let finalPrice = (rolls[rollType].basePrice + selectedGlaze) * selectedPack;
    let priceChangeElement = document.querySelector('#priceChange');
    priceChangeElement.innerText =  finalPrice.toFixed(2);
}

// loops to display the dropdown dynamically on the webpage //
for (i in glazingDict) {
    var option = document.createElement('option');
    option.innerText = glazingDict[i].name;
    option.value = glazingDict[i].value;
    selectGlazing.appendChild(option);
    //console.log(glazingDict[i].name);
    //console.log(glazingDict[i].value);
}

for (i in packSizeDict) {
    var option = document.createElement('option');
    option.text = packSizeDict[i].name;
    option.value = packSizeDict[i].value;

// console.log(packSizeDict[i].name);
// console.log(packSizeDict[i].value);

    selectPackSize.appendChild(option);
}


selectGlazing.addEventListener('change', updateGlazing);
selectPackSize.addEventListener('change', updatePackSize);
// console.log(selectGlazing);


//creating an array to later call when add to cart is executed//
let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//calling all elements that need to update//
const pageTitle = document.getElementById('pageHeader');
pageTitle.innerText = rollType + " Cinnamon roll";

const pageImage = document.getElementById('prodDetailImg');
pageImage.src = "../assets/products/" + rolls[rollType].imageFile;

const pagePrice = document.getElementById('priceChange');
pagePrice.innerText = rolls[rollType].basePrice;

const addCart = document.getElementById("actionButton");
addCart.addEventListener('click', cartArray);

if(localStorage.getItem('cartStorage') != null){
    retrieveFromLocalStorage();
}

//function to execute and display the Roll array//
function cartArray(){
    let finalGlaze = selectGlazing.options[selectGlazing.selectedIndex].innerHTML;
    let finalPack = selectPackSize.options[selectPackSize.selectedIndex].innerHTML;
    let rollProd = new Product(rollType, rolls[rollType].basePrice, finalGlaze, finalPack);
    cart.push(rollProd);
    console.log(cart);
    saveToStorage();
}

function saveToStorage() {
    const cardArrayString = JSON.stringify(cart);
    localStorage.setItem("cartStorage", cardArrayString);
    console.log(cardArrayString)
}
  
function retrieveFromLocalStorage() {
    const cardArrayString = localStorage.getItem("cartStorage");
    const cartArrayTemp = JSON.parse(cardArrayString);
    for (const cartData of cartArrayTemp) {
        cart.push(cartData);
    }
    console.log(cardArrayString);
}






//attempt to change the dish image when the suprise recipe is changed//
const recipeImages = {
    1: "assets/dishsmall_02.png",
    2: "assets/dishsmall_03.png",
    3: "assets/dishsmall_03.svg",
    2: "assets/dishsmall_03.png",
};

console.log("Recipe Index:", t);
let dishImage = document.querySelector('.dish');
dishImage.src = recipeImages[t];