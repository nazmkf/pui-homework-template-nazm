
//creating array to add the populated items in the cart//
let populateArray = [];

//
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}


let ogCinRoll = new Roll("Original", "Sugar Milk", 1, 2.49);
let walnutRoll = new Roll("Walnut", "Vanilla Milk", 12 , 3.99);
let raisinRoll = new Roll("Raisin",  "Sugar Milk", 3, 2.99);
let appleRoll = new Roll("Apple", "Original", 3, 3.49);

console.log("Base price = " + ogCinRoll.basePrice);

//figure out calculation of the price//



let pageLoad = document.getElementById("shoppingList");
pageLoad.addEventListener('load', populateCart);



//function to append to the elements, calling template by ID//
function populateCart(Roll) {

   // This does not work because I am calling the same ID as pageLoad//
   // const cartContainer = document.getElementById("shoppingList");

   const cartItemTemplate = document.getElementById("cartTemplate");
   const rollImage = Roll.image;
   const rollName = Roll.name;
   const rollGlazingName = Roll.glazing;
   const packSizeNum = Roll.packSize; 


  //populateArray.push(pageLoad);//

}


