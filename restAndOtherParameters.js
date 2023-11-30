'use strict'
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    order: function(starterIndex,mainIndex){
       return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
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
    }
  };

//   spread operator because on the right side of the operator
const arr = [1,2,...[3,4]];
console.log(arr);
// Rest , because on left side of =
const [a,b,...others] = [1,2,3,4,5,6,7];
console.log(a,b,others);

const [Pizza, Risotto,...Otherfood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(Pizza,Risotto,Otherfood);
// Objects
const{sat,...weekdays} = restaurant.openingHours;
console.log(weekdays);
// functions
const add = function(...numbers){
    let sum = 0;
    for (let i=0;i<numbers.length;i++){
        sum = sum + numbers[i];
    }
    console.log(sum);
}
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
const x =[5,17,25]
add(...x);