// let arrGlaze = [ ["Keep Original", 0.00], ["Sugar Milk" , 0.00], ["Vanilla Milk" , 0.50] , ["Double Chocolate", 1.50]];
// let arrPack = [[1,1] , [3,3], [6,5], [12, 10]];


// //array listing all the properties and values for glazing
// let arrGlaze2 = [
//     {
//       type: 'Keep Original',
//       addition: 0.00,
//     },
//     {
//       type: 'Sugar Milk',
//       addition: 0.00,
//     },
//     {
//       type: 'Vanilla Milk',
//       addition: 0.50,
//     },
//     {
//       type: "Double Chocolate",
//       addition: 1.50,
//     },
//   ];

// //array listing all the properties and values for pack sizing
// let arrPack2 = [
//     {
//       type: 1,
//       addition: 1,
//     },
//     {
//       type: 3,
//       addition: 3,
//     },
//     {
//       type: 6,
//       addition: 5,
//     },
//     {
//       type: 12,
//       addition: 10,
//     },
//   ];


// function displayPrice(price) {
//     let priceElement = document.querySelector('#priceChange');
  
//     priceElement.innerText = price.addition;
//   }



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
   double_chocolate: {name:"Double Chocolate", value: 1.5}
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
console.log(selectGlazing);

// function to update the glazing & pack size choice //
// displayPrice function executes with the value recieved from the calcPrice function as a parameter//
function updateGlazing (){
    console.log('You selected ' + this.value);
    originalCinRoll.glazing = parseFloat(this.value);
    displayPrice(calcPric(originalCinRoll));
}

function updatePackSize (){
    console.log('You selected ' + this.value);
    originalCinRoll.packSie = parseFloat(this.value);
    displayPrice(calcPrice(originalCinRoll));
}

// function to calculate the price//
function calcPric(product) {
    let finalPrice = (originalCinRoll.price + originalCinRoll.glazing) * originalCinRoll.pack;
    return finalPrice;
}

//function to display the price calculated //
function displayPrice(finalPrice) {
    let priceChangeElement = document.querySelector('#priceChange');
    priceChangeElement.innerHTML = '$ ' + finalPrice.toFixed(2);

}

// loops to display the dropdown dynamically on the webpage //
for (i in glazingDict) {
    var option = document.createElement('option');
    option.text = glazingDict[i].name;
    option.value = glazingDict[i].value;
console.log(glazingDict[i].name);
console.log(glazingDict[i].value);

    selectGlazing.add(option);
}

for (i in packSizeDict) {
    var packNumber = document.createElement('packNumber');
    packNumber.text = packSizeDict[i].name;
    packNumber.value = packSizeDict[i].value;

console.log(glazingDict[i].name);
console.log(glazingDict[i].value);

    selectPackSize.add(packNumber);
}


selectGlazing.addEventListener('change', updateGlazing);
selectPackSize.addEventListener('change', updatePackSize);