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
  };
  console.log("-------or-----");
  console.log(3 || "Abdul");
  console.log("" || 'Abdul');
  console.log(true || 0);
  console.log(undefined || null);
  console.log(undefined || 0 || ""|| 'Hello' || 23 || null);

  restaurant.numGuests = 0;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);
  const guests2 = restaurant.numGuests || 10;
  console.log(guests2);
  console.log('---AND--');
  console.log(0 && 'Abdul');
  console.log('Abdul' && 0);
  console.log(7 && 'Abdul Azeem');

  console.log("Abdul" && 23 && null && "Abdul");

  




