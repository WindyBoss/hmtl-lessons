// Multitasked function-filter-cycle in arrow function
const filter = function (array, test, limit) {
    const filteredArray = [];
    
    for (const element of array) {

        const passed = test(element, limit);

        if (passed) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}


const callback1 = (value, limit) => value >= limit; 
console.log(filter([1, 2, 3, 4, 5], callback1, 4));

const callback2 = (value, limit) => value < limit;
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2, 5)); 


console.log(filter([1, 2, 3, 4, 5], (value, limit) => value >= limit, 4));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (value, limit) => value < limit, 5)); 


const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'strawberries', quantity: 300, isFresh: false },
    { name: 'plums', quantity: 50, isFresh: false },
    { name: 'pineapples', quantity: 190, isFresh: true },
    { name: 'pemigranate', quantity: 150, isFresh: true },
];


const getFruitByQuantity = (fruit, quantity) => fruit.quantity >= quantity && fruit.isFresh === true;

console.log(filter(fruits, getFruitByQuantity, 160));
console.log(filter(fruits, (fruit, quantity) => fruit.quantity >= quantity && fruit.isFresh === true, 160));



function includes(array, value) {

    for (const el of array) {
        console.log(el);
        if (el === value) {
            console.log('true'); 
            return true;
        } 
            // console.log('false'          
    }
    result = false;
}

  console.log(includes([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));