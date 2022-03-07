// Remaking all code from Arrays to function for multiple uses.

// Function can help to multiply the code if it must be multiplied.
// example - function, which count the sum of numbers in array, but which can be used with different arrays.

const array = [40, 30, 50, 45, 43, 65, 61, 98, 23, 100]; 

const countAmount = function (items) {
    // remember to declare variable in the beginning of the function.
    let totalValue = 0;

for (const item of items) {
    totalValue += item;
}
console.log(totalValue);
return totalValue;
}
countAmount(array);
countAmount([30, 40, 50, 45, 43, 65]);



// The example of using function to console log all elements in the array

const fruits = ["apples", "lemon", "bacon", "orange", "grapes", "tomato", "banana", "strawberry"];
const secondArray = ['France', 'USA', 'United Kingdom', 'Russia', 'Ukraine', 'China', 'Canada'];

const logItems = function(items) { 
for (const item of items) {
    console.log(item);
}
}
logItems(fruits);
logItems(secondArray);
// This function should not has return

// Function of checking the logins, which can be used multiple times
const logins = ['vo4okidik', 'kingbarmental', 'modaljs', 'pinguinsaresmart'];

const loginToFind = function(allLogins, userLogin) {
    for (const login of allLogins) {        
        if (login === userLogin) {
            return `User ${userLogin} has defined`;
        }
    }
    // remember to put return after end of 'for'
    return `User ${userLogin} was not defined`;
}

console.log(loginToFind(logins, logins[2]));
console.log(loginToFind(logins, 'bangarang'));
console.log(loginToFind(logins, logins[3]));
console.log(loginToFind(logins, 'json'));

// <----------------------------------------- OR -> The easiest way -------------------------------------------------------> 


const loginToFindEasier = function(allLogins, userLogin) {
return logins.includes(userLogin)
    ? `User ${userLogin} has defined` 
    : `User ${userLogin} was not defined`;
}
console.log(loginToFindEasier(logins, logins[4]));
console.log(loginToFind(logins, 'jasong'));
console.log(loginToFind(logins, 'jimbim'));
console.log(loginToFind(logins, logins[1]));



// Task: 2 - make a script, which will find in different arrays the smallest number

const findSmallestNumber = function(numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        // the smallest number
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

console.log(findSmallestNumber([10, 20, 30, 40, 50]));
console.log(findSmallestNumber([10, 20, 30, 40, 1, 6, -200]));


// Case replace function (lowercase <----> uppercase)
const caseReverse = function(string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        // console.log(letter);
        invertedString 
            += letter === letter.toLowerCase() 
                ? letter.toUpperCase()
                : letter.toLowerCase();
    }
    return invertedString;
}

console.log(caseReverse('ViTaLiY ZHYryk'));


// Task 2: Make script, which makes a URL, connected by "-", from the string phrase (the title of the page) from different arrays

const slugify = function(string) {
    return string.toLowerCase().split(' ').join('-');
}

console.log(slugify('The possibilities of the analitical thinking in emotional control'));
console.log(slugify('і управління передається на наступну ітерацію'));