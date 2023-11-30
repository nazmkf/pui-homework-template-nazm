



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

/* <div class="right_text">
<h1 class="title">Mangalore</h1>
<p class="brown">recipes straight from grandma's kitchen</p>

<h2 class="subtitle_black">What are you in the mood for today?</h2>
<p class="regular_black">Click on suprise me and get today's recipe!</p>
<button class="suprise"> SUPRISE ME </button>
</div> */

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


const ingredients = {
    1: [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
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
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
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



const recipe = {
    "cake" : {
        "ingredients" : ["1 (16 ounce) loaf frozen pound cake, thawed",
        "3/4 cup boiling water",
        "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
        "1/4 cup cold water",
        "1 ounce BAKER'S Semi-Sweet Chocolate",
        "2 cups thawed COOL WHIP Whipped Topping, divided",
        "1 1/2 cups cherry pie filling, divided"],

        "directions" : "Remove foil lid from cake package. (Do not remove cake from pan.) Pierce cake with skewer at 1/2-inch intervals, poking skewer through cake to bottom of pan. <br> Add boiling water to gelatin mix in small bowl; stir 2 min. until completely dissolved. Stir in cold water; pour over cake. Refrigerate 1 hour. Meanwhile, make curls from semi-sweet chocolate.<br>Invert cake onto platter. Cut cake horizontally in half. Spread bottom half of cake with 1/3 cup COOL WHIP; cover with 1 cup pie filling and top cake layer. Frost top and sides of cake with remaining COOL WHIP. Garnish with remaining pie filling and chocolate curls."
    }
};


const description = {
    "cake": [
      "1 (16 ounce) loaf frozen pound cake, thawed",
      "3/4 cup boiling water",
      "1 (3 ounce) package JELL-O Cherry Flavor Gelatin",
      "1/4 cup cold water",
      "1 ounce BAKER'S Semi-Sweet Chocolate",
      "2 cups thawed COOL WHIP Whipped Topping, divided",
      "1 1/2 cups cherry pie filling, divided"
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




 