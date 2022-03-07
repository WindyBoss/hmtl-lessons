/* 
forEach use the callback function to all elements in the array
It do not return anythings
replace for if it is not necessary to cut the cycle
Array.prototype.forEach(callback(CurrentValue, Index, Array), thisArg)
*/

const numbers = [5, 10, 15, 20, 25];


numbers.forEach(function (number) {
    console.log('number', number);
    console.log(this);
    },
    { a: 5, b: 10}, // -> will be shown in console.log(this) 
);
console.log('numbers', numbers); // --> [5, 10, 15, 20, 25];



numbers.forEach(function (number, index, array) {
    array[index] = 20; // -> this code will be made to all elements in the array
});

console.log('numbers', numbers); // --> [20, 20, 20, 20, 20];