

let arrGlaze = [ ["Keep Original", 0.00], ["Sugar Milk" , 0.00], ["Vanilla Milk" , 0.50] , ["Double Chocolate", 1.50]];
let arrPack = [[1,1] , [3,3], [6,5], [12, 10]];


//array listing all the properties and values for glazing
let arrGlaze2 = [
    {
      type: 'Keep Original',
      addition: 0.00,
    },
    {
      type: 'Sugar Milk',
      addition: 0.00,
    },
    {
      type: 'Vanilla Milk',
      addition: 0.50,
    },
    {
      type: "Double Chocolate",
      addition: 1.50,
    },
  ];

//array listing all the properties and values for pack sizing
let arrPack2 = [
    {
      type: 1,
      addition: 1,
    },
    {
      type: 3,
      addition: 3,
    },
    {
      type: 6,
      addition: 5,
    },
    {
      type: 12,
      addition: 10,
    },
  ];


function displayPrice(price) {
    let priceElement = document.querySelector('#priceChange');
  
    priceElement.innerText = price.addition;
  }

function onSelectValueChange() {
    // In this function, `this` corresponds to the select
    // element. So `this.value` will contain the value of the
    // selected option as a string.
    console.log('You selected ' + this.value);
  
    // We need to convert the string value to an integer
    let priceIndex = parseInt(this.value);
  
    // Now retrieve the object at the index specified by the select's value
    let priceToDisplay = arrPack2[priceIndex];
  
    // Update the UI
    displayPrice(priceToDisplay);
  }
  
  // When the page loads, find the select element.
  let selectElement = document.querySelector('#priceSelect');
  