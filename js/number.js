
//<!-- Number.parseInt -->
//  with const //
let elementWidth = '50px';
const result = Number.parseInt(elementWidth);

console.log(result);



// no const // 
let elementHeight = '60px';
elementHeight = Number.parseInt(elementHeight);

console.log('elementHeight: ' , elementHeight);



//<!-- Number.parseFloat-->
let sizeWidth = '304.34px';
sizeWidth = Number.parseFloat(sizeWidth);

console.log('sizeWidth: ' , sizeWidth);



//<!-- toFixed --> 
// helps to cut the number after . to the number in brackets. 

let salary = 1300.145432; 
salary = salary.toFixed(1);
salary = Number(salary);

console.log(salary);

// Instruction: 1) to.Fixed - cut the number, but make it string. Number() - reverse it to number
// short form 

let mySalary = 3000.23124 
console.log(Number(mySalary.toFixed(2)));




// <!-- NaN -->

let value = 'This stroke in not a number';
let quantity = '2';

console.log(Number(quantity));
console.log(Number(value));


//<!-- Math -->

const base = 2.2123;
const power = 5; 

//Math.pow // -> до степеня
console.log(Math.pow(base.toFixed(), power));

//or 

console.log(base.toFixed() ** power);

//Math.sqrt // - корінь

console.log(Math.sqrt(base.toFixed() ** base.toFixed()));

// Math.floor -> the biggest complited number 
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - the smallest complited number 
console.log(Math.ceil(1.2)); // 2

// example code // 

let basic = prompt('write the number');
let poweric = prompt('write the power'); 

console.log(Number(basic));
console.log(Number(poweric));

console.log(Number(poweric) ** Number(basic));



// Generate random number // 
// <!-- Generate the random number that is limited by the first and second numbers, 
// that the users text in communicator, and, additionally rounded to the whole number
   
const getNumberOne = prompt('write the first number');
const getNumberTwo = prompt('write the second number');

console.log(Math.round(Math.random() * (Math.round(getNumberOne) - Math.round(getNumberTwo)) + Math.round(getNumberTwo)));

//Formula: Math.random * (max - min) + min


// Generate random color //
// <!-- Generate colors by using index number. It is possible to generate index for color 
// by adding the list of colors in [''] and separate them by comma. By using the same formula as for random numbers, 
// is possible to generate random colors, by console.log and adding the style
// .lenght - helps to  

const colors = ['white', 'black', 'teal', 'tomato', 'pink', 'yellow', 'orange', 'pomegranate', 'mint', 'blue'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;


// Short form of Operators 
// a += 2;  --> // a = a + 2
// b -= 4;  --> // b = b - 4
// c *= 3;  --> // c = c * 3
// d /= 10; --> // d = d / 10

// Method isNan checks does a variable is a NaN
const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true