
// task 1: to calculate the sum of all numbers in array

// PLAN

// 1. make a cycle by using 'FOR' 
// 2. create a variable total
// 3. calculate sum inside 'FOR' 
// 4. console.log

const array = [40, 30, 50, 45, 43, 65, 61, 98, 23, 100]; 

let total = 0;

for (let i = 0; i < array.length; i++) {
    total += array[i];
}
console.log(total);

//  <------------------------------------------------------ OR -------------------------------------------------------------->

// This is easier version of the code
let totalValue = 0;

for (const value of array) {
    totalValue += value;
}
console.log(totalValue);



// task 2: calculate the sum of all paired numbers

//PLAN

// 1. Variable totalAmount
// 2. make a cycle
// 3. check the paired number
// 4. count the sum

const numbers = [1, 2, 4, 5, 7, 9, 10, 15, 20, 34, 55]; 

let totalAmount = 0;

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (numbers[i] % 2 === 0) {
        totalAmount += numbers[i];
    }
}
console.log(totalAmount);


// <---------------------------------------------------- OR --------------------------------------------------------------->

let amountTotal = 0;

for (const number of numbers) {
    // console.log(number);

    if (number % 2 === 0) {
        console.log(`${number} - Paired number`);
        amountTotal += number;
    }
}

console.log(amountTotal);


// <---------------------------------------------------- OR -------------------------------------------------------------->

let totalSum = 0;

for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log(`${number} - Unpaired number`);
        continue;
    }

    console.log(`${number} - Paired number`);
    totalSum += number;
}

console.log(totalSum);