



function getRandomInt(max){
    return r = Math.floor(Math.random()*max);
}

let randomRecipe = getRandomInt(4) + 1; 

console.log(randomRecipe);

let supriseMe = document.querySelector('.suprise');
supriseMe.addEventListener("click", chosenRecipe);

function chosenRecipe(){

    // let a = document.createElement('p');
    // a.textContent = recipeTitle[t];
    
    // let chosenRecipeText = document.querySelector('.rightText');
    // chosenRecipeText.appendChild(a);

    let t = randomRecipe;    
    let newTitle = document.querySelector('.title');
    newTitle.textContent = recipeTitle[t];

    let newSubtitle = document.querySelector('.brownSubtitle');
    newSubtitle.textContent = 'is todays chosen recipe';

    let newDescrip = document.querySelector('.special_black');
    newDescrip.textContent = recipeDescrip[t] + "Want to see another recipe?";

    let newQues = document.querySelector('.subtitleQues_black');
    newQues.textContent = '';

    let supriseButton = document.querySelector('.supriseMe');
    supriseMe.textContent = "Try Again";
}


const recipeDescrip = {
    1: [
      "Dali Thoy, a Konkani Style Dal is a simple Indian Vegan Dal recipe made with minimal ingredients and under 30 minutes."
    ],
  
    2: [
      "Dali Thoy, a Konkani Style Dal is a simple Indian Vegan Dal recipe made with minimal ingredients and under 30 minutes.Rice"
    ],
  
    3: [
        "Dali Thoy, a Konkani Style Dal is a simple Indian Vegan Dal recipe made with minimal ingredients and under 30 minutes.Rice"
    ],
  
    4: [
        "Dali Thoy, a Konkani Style Dal is a simple Indian Vegan Dal recipe made with minimal ingredients and under 30 minutes.Rice"
    ]
  };


const recipeTitle = {
    1: [
      "Dalithoy"
    ],
  
    2: [
      "Daal Rice"
    ],
  
    3: [
      "Surnoli Dosa"
    ],
  
    4: [
      "Kadgi Ghashi"
    ]
  };

// let n = 0;
// let headingContent = document.querySelectorAll('.heading');
// console.log(headingContent);

// for (i in recipeTitle) {
//     console.log(i);
//     console.log(n);
//     var content = document.createElement('p');
//     content = recipeTitle[i];
//     console.log(content);
//     headingContent[n].textContent = content;
//     n++;
// }





const ingredients = {
    1: [
      "½ Toor dal",
      "2 cups, cup boiling water",
      "½ tsp Turmeric",
      "Few Curry leaves",
      "1 tsp Coconut Oil",
      "1 tsp Mustard seeds ",
      "½ tsp Cumin seeds",
      "2 Green chillies",
      "1 inch Ginger Piece",
      "To garnish Cilantro"
    ],
  
    2: [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
    ],
  
    3: [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
    ],
  
    4: [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
    ]
  };


let j = 0;
let ingredientContent = document.querySelectorAll('.ingredients');

for (i in ingredients) {
    // console.log(ingredients[i])
    var content = document.createElement('p');
    content = ingredients[i];
    console.log(content);
    ingredientContent[j].textContent = content;
    j++;
}



const prep = {
"cake": [
    "• Wash the toor dal and add 2 cups of water and turmeric powder. Pressure cook in your preferred way. Let the dal cool and mash it nicely.",
    "• Chop the green chilies, ginger, and cilantro.",
],

"cakeTwo": [
    "1 (16 ounce) loaf frozen pound cake, thawed",
    "3/4 cup boiling water",
    "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
    "1/4 cup cold water",
    "1 ounce BAKER'S Semi-Sweet Chocolate",
    "2 cups thawed COOL WHIP Whipped Topping, divided",
    "1 1/2 cups cherry pie filling, divided"
],

"cakethree": [
    "1 (16 ounce) loaf frozen pound cake, thawed",
    "3/4 cup boiling water",
    "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
    "1/4 cup cold water",
    "1 ounce BAKER'S Semi-Sweet Chocolate",
    "2 cups thawed COOL WHIP Whipped Topping, divided",
    "1 1/2 cups cherry pie filling, divided"
],

"cakefour": [
    "1 (16 ounce) loaf frozen pound cake, thawed",
    "3/4 cup boiling water",
    "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
    "1/4 cup cold water",
    "1 ounce BAKER'S Semi-Sweet Chocolate",
    "2 cups thawed COOL WHIP Whipped Topping, divided",
    "1 1/2 cups cherry pie filling, divided"
]
};
  

//   let k = 0;
//   let prepContent = document.querySelectorAll('.ingredients');

//   for (i in ingredients) {
//     // console.log(ingredients[i])
//     var content = document.createElement('p');
//     content = ingredients[i];
//     console.log(content);
//     ingredientContent[j].textContent = content;
//     j++;
// }





const description = {
    "cake": [
      "I cooked my Konkani Dal in the Instant Pot using Pot in Pot Method popularly known as PIP method – I will explain the PIP process in more details in my next post. But I cooked this dal for 8 minutes in manual mode on high pressure and let the pressure release naturally.",
      "Heat a pan and add the coconut oil.",
      "Once the oil is hot, add the mustard seeds, cumin seeds, and hing.",
      "Let it crackle. And then add the curry leaves, chopped green chilies, and ginger.",
      "Saute for a minute and then add the cooked dal.",
      "Add salt and mix well.",
      "Allow it to simmer for 3 to 4 minutes.",
      "Finally, add the chopped cilantro and turn off the heat.",
      "Konkani Dal or Dalithoy is ready. Serve hot with rice or roti."

    ],
  
    "cakeTwo": [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
    ],
  
    "cakethree": [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
    ],
  
    "cakefour": [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
    ]
  };




 