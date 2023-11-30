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
    }
  };

  restaurant.orderDelivery({
    time:'22:30',
    address:'Viva del Sole,21',
    mainIndex:2,
    starterIndex:2,
  });

  const {names,openingHours,categories} = restaurant;
  console.log(names, openingHours,categories);

  const{
    names: restaurantName,
    openingHours : hours,
    categories : tags,
  }= restaurant;
  console.log(restaurantName,hours,tags);

const { menu = [],starterMenu:starters = []} = restaurant;
console.log(menu,starters);

let a = 999;
let b=111;
const obj = {a:23, b:45,c:12};
({a,b}=obj);
console.log(a,b);

// nested objects
const{
    fri:{open:o,close:c},
} = openingHours;
console.log(o,c);