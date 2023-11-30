'use strict'
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    order: function(starterIndex,mainIndex){
       return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }
  };

  restaurant.newguests = 0;
  const guests = restaurant.newguests || 10;
  console.log(guests);
  const correctGuest = restaurant.newguests ?? 10;
  console.log(correctGuest);

const rest1 = {
   name:'capri',
   numGuests:20,
};

const rest2 = {
   name: 'la Piazza',
   owner: 'giovanmi Rossi'
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1.numGuests, rest2.numGuests);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1,rest2);

rest1.numGuests ??=10;
rest2.numGuests ??= 10;
console.log(rest1,rest2);

rest1.owner &&='<ANONYMOUS>';
rest2.owner &&='<ANONYMOUS>';
console.log(rest1,rest2);