// example 
// Task: 
// Find the price of the hotel by matching it to the stars, that hotel possess, 
// depending on the preferences of the customers (which hotel-star they decide)

// price <--> stars ---> 
// 20$ --> 1 star
// 30$ --> 2 star
// 50$ --> 3 star
// 70$ --> 4 star
// 120$ --> 5 star

let stars = prompt('Write level of quality of the hotel, in which you want to settle');
let price;

if (Math.round(stars) === 1) {
    price = 20;
} else if (Math.round(stars) === 2) {
    price = 30;
} else if (Math.round(stars) === 3) {
    price = 50;
} else if (Math.round(stars) === 4) {
    price = 70;
} else if (Math.round(stars) === 5) {
    price = 120;
} else {
    console.log('use the proper number of stars');
}

if (price > 0) {
console.log(`Price for a night - ${price}$`);
} 


// Switch function can replace <--- if else --->


// example restaurant, where dinner for 2 is for 20% more expensive, than a night in a hotel

let starsOfRest = prompt('Write level of quality of the restaurant, in which you want to eat');
let priceInRest;

switch (Math.round(starsOfRest)) {
    case 1: 
        priceInRest = Math.round(20 * 1.2);
        break;

    case 2: 
        priceInRest = Math.round(30 * 1.2);
        break;
    
    case 3: 
        priceInRest = Math.round(50 * 1.2);
        break;

    case 4: 
        priceInRest = Math.round(70 * 1.2);
        break;

    case 5: 
        priceInRest = Math.round(120 * 1.2);
        break;

    default: 
        console.log('use the proper number of stars');
}       

if (priceInRest > 0) {
console.log(`Price for double dinner - ${priceInRest}$`);
}


// How to work with combinated variables 
// price <--> stars ---> 
// 120$ --> 1 star
// 120$ --> 2 star
// 230$ --> 3 star
// 230$ --> 4 star
// 420$ --> 5 star

let saunaHours = prompt('Write the time of sauna in which you want to book');
let saunaPrice;

if (Math.round(saunaHours) === 1 || Math.round(saunaHours) === 2) {
    saunaPrice = 20;
} else if (Math.round(saunaHours) === 3 || Math.round(saunaHours) === 4) {
    saunaPrice = 30;
} else if (Math.round(saunaHours) === 5) {
    saunaPrice = 50;
} else {
    console.log('You cannot book the sauna for more hours than 5');
}

if (saunaPrice > 0) {
console.log(`Price for sauna - ${saunaPrice}$`);
}



//Combinated Switch

let starsOfCar = prompt('Which quality of cars you want to order (1-5 stars)');
let priceOfTheCarBook;

switch (Math.round(starsOfCar)) {
    case 1:
    case 2:  
        priceOfTheCarBook = 120;
        break;
    
    case 3:
    case 4:  
        priceOfTheCarBook = 230;
        break;

    case 5: 
        priceOfTheCarBook = 420;
        break;

    default: 
        console.log('use the proper number of stars');
}       

if (priceOfTheCarBook > 0) {
console.log(`Price for car - ${priceOfTheCarBook}$`);
}

// Switch can used only if the variable is equal to fixed definition (no segments of number)
// always use operator -->break<-- for cutting cycle (it can be missed only if the variable is equal the for ex. smaller number
// but needs the results of bigger)

// editional Task: make a discount for each star level price

let discount;  

if (Math.round(stars) === 1 && Math.round(starsOfCar) === 1 && Math.round(starsOfRest) === 1 && Math.round(saunaHours) === 1) {
    discount = 0.1;
} else if (Math.round(stars) === 2 && Math.round(starsOfCar) === 2 && Math.round(starsOfRest) === 2 && Math.round(saunaHours) === 2) {
    discount = 0.2;
} else if (Math.round(stars) === 3 && Math.round(starsOfCar) === 3 && Math.round(starsOfRest) === 3 && Math.round(saunaHours) === 3) {
    discount = 0.25;
} else if (Math.round(stars) === 4 && Math.round(starsOfCar) === 4 && Math.round(starsOfRest) === 4 && Math.round(saunaHours) === 4) {
    discount = 0.3;
} else if (Math.round(stars) === 5 && Math.round(starsOfCar) === 5 && Math.round(starsOfRest) === 5 && Math.round(saunaHours) === 5) {
    discount = 0.3;
} else {
    discount = 0.15;
}


// <--- Total price script --->

let totalPrice; 

if (discount > 0) {
    totalPrice = Math.round((price + priceOfTheCarBook + priceInRest + saunaPrice) / (1 + discount));
} else {
    totalPrice = Math.round((price + priceOfTheCarBook + priceInRest + saunaPrice) / (1 + discount));
}

if (totalPrice > 0) {
console.log(`Price with discount (${discount}% ) if you order all our services - ${totalPrice}$`);
}