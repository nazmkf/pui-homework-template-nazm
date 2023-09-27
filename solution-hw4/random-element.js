
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
console.log(glazingDict);

const packSizeDict = {
    one_pack: {name:"1", value: 1},
    three_pack: {name:"3", value: 3},
    six_pack: {name:"6", value: 5},
    twelve_pack: {name:"12", value: 10}
}
console.log(packSizeDict);

// creating an object for the class //
let originalCinRoll = new Product ('Original Cinnamon Roll' , 2.49, 0, 1);


let selectGlazing = document.querySelector('#glazing');
let selectPackSize = document.querySelector('#packSize');
// console.log(selectGlazing);

// function to update the glazing & pack size choice //
// displayPrice function executes with the value recieved from the calcPrice function as a parameter//
function updateGlazing (){
    console.log('You selected ' + this.value);
    originalCinRoll.glazing = parseFloat(this.value);
    displayPrice(calcPric(originalCinRoll));
}

function updatePackSize (){
    console.log('You selected ' + this.value);
    originalCinRoll.pack = parseFloat(this.value);
    displayPrice(calcPric(originalCinRoll));
}

// function to calculate the price//
function calcPric(product) {
    let finalPrice = (product.price + product.glazing) * product.pack;
    return finalPrice;
}

//function to display the price calculated //
function displayPrice(finalPrice) {
    let priceChangeElement = document.querySelector('#priceChange');
    priceChangeElement.innerHTML =  finalPrice.toFixed(2);
}

// loops to display the dropdown dynamically on the webpage //
for (i in glazingDict) {
    var option = document.createElement('option');
    option.innerText = glazingDict[i].name;
    option.value = glazingDict[i].value;
console.log(glazingDict[i].name);
console.log(glazingDict[i].value);

    selectGlazing.appendChild(option);
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

console.log(selectGlazing);


let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


const pageTitle = document.getElementById('pageHeader');
pageTitle.innerText= rollType + " Cinnamon roll";

const pageImage = document.getElementById('prodDetailImg');
pageImage.src = "../assets/products/" + rolls[rollType].imageFile;

const pagePrice = document.getElementById('priceChange');
pagePrice.innerText = rolls[rollType].basePrice;


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


