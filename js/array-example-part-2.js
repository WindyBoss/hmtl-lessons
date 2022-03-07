// Task 1: create an algorythm, that checks the array to find the login

const logins = ['vo4okidik', 'kingbarmental', 'modaljs', 'pinguinsaresmart'];
const trueLogin = 'modaljs';

let message = `User ${trueLogin} was not defined`;

for (let i = 0; i < logins.length; i++) {
    const login = logins[i];

    console.log(`${login} === ${trueLogin} -->  `, login === trueLogin);

    if (login === trueLogin) {
        message = `User ${trueLogin} has defined`;
        break;
    }

}

console.log(message);



// <-------------------------------------------------- OR ------------------------------------------------------------------->


for (const login of logins) {
    console.log(`${login} === ${trueLogin} -->  `, login === trueLogin);
    
    if (login === trueLogin) {
        message = `User ${trueLogin} has defined`;
        break;
    }

}
console.log(message);



// <------------------------------------------ OR -> The easiest way ----------------------------------------------------------> 

const loginsList = ['vo4okidik', 'kingbarmental', 'modaljs', 'pinguinsaresmart'];

const loginMessage = loginsList.includes(trueLogin)
    ? `User ${trueLogin} has defined` : 
    `User ${trueLogin} was not defined`;

    console.log(loginMessage);


// Task: 2 - make a script, which will find:
// 1. the smallest and the highest number in the array.
// 2. sum of all elements the array
// 3. sum of all paired and unpaired numbers
// 4. make ar array from number in segment 10 <--> 100

const numbers = [52, 27, 98, 9, 1, 2543, 30]
let smallestNumber = numbers[0];
let biggestNumber = numbers[0];
let totalAmount = 0;
let totalAmountPaired = 0;
let totalAmountUnPaired = 0;
let totalAmountSegment = 0;

for (const number of numbers) {

    // the smallest number
    if (number < smallestNumber) {
        smallestNumber = number;
    }

    // the biggest number
    if (number > biggestNumber) {
        biggestNumber = number;
    }

    // sum of all elements in array
    totalAmount += number;

    // sum of all paired numbers in array
    if (number % 2 === 0) {
        totalAmountPaired += number;
    } else {
        totalAmountUnPaired += number;
    }

    // sum of all elements in segment 10 <--> 100
    if (number >= 10 && number <= 100) {
        totalAmountSegment += number;
        continue;
    }
}

console.log('smallestNumber: ', smallestNumber);
console.log('biggestNumber: ', biggestNumber);
console.log('totalAmount: ', totalAmount);
console.log('totalAmountPaired: ', totalAmountPaired);
console.log('totalAmountUnPaired: ', totalAmountUnPaired);
console.log('totalAmountSegment: ', totalAmountSegment);

// Task 3: join the all elements in array in one string, separated by commas

const fruits = ["apples", "lemon", "bacon", "orange", "grapes", "tomato", "banana", "strawberry"];
// the variables must be declared, because the system needs to know the type the data (string, number and setra)
let string = '';
let stringAlternate = '';

// the function helps to cut all elements from array and launch to the one string.
for (const fruit of fruits) {
    // helps to launch all elements of the array in one string 
    string += fruit + ', ';
    // + ', ' ----> help to add the comma the space between the elements of the array
}
// .slice - cut the the segment from string (beginning symbol in string, the last symbol)
string = string.slice(0, string.length - 2);
console.log(string);


// <--------------------------------------------------- OR ---------------------------------------------------------------->

// the option .join helps to launch the array in the one string. In the brackets it needs the separator. 
stringAlternate = fruits.join(', ');
console.log(stringAlternate);
