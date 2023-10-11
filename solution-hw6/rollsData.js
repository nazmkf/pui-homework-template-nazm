const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

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

class Roll{
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}