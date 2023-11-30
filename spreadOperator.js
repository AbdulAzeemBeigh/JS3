const restaurant = {
    names: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
  
    order: function(starterIndex,mainIndex){
       return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    orderDelivery: function(starterIndex=1,mainIndex=0,time='20:00',address){
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
  };

  const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
  console.log(menu);

  const arr = [7,8,9];
  const badNewArr = [1,2,arr[0],arr[1],arr[2]];
  console.log(badNewArr);
// using spread operator
const newArr = [1,2,...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu,'samosa'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays
const _menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// Iterables: array, strings, maps, sets, Not objects

const str="Abdul";
const letters = [...str,'','A.'];
console.log(letters);

const ingredients = [
    prompt("lets make pasta! Ingredients?"),
    prompt("Ingredient 2?"),
    prompt('Ingredient 3'),
];
const x =[...ingredients]
console.log(`The ingredients that you selected are ${x}.`);
// objects
const newRestaurant = { foundedIn:1998,...restaurant,founder:'Abdul Azeem'};
console.log(newRestaurant);
const newRestaurantCopy = {...restaurant};
newRestaurantCopy.name = 'Kashmir Eatrey';
console.log(newRestaurant);
console.log(newRestaurantCopy
    );