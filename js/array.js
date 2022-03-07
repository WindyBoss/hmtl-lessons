// Arrays - is the complicated element in JS
// Instead of the definition in variables, complicated elements use presented as the link to variables.
// It cause an important differences.

let a = 10;
const b = a;
console.log(a); // - a = 10
console.log(b); // - b = 10

a = 20;
console.log(a); // a = 20
console.log(b); // b = 10

// But complicated elements are different

const c = [1, 2, 3];
const d = c;
console.log(c); // c = [1, 2, 3]
console.log(d); // d = [1, 2, 3]

c[1] = 500;
console.log(c); // c = [1, 500, 3]
console.log(d); // d = [1, 500, 3]




// Cycle in Array

// <-------------------------------------------------- Function "FOR" ------------------------------------------------------>
const fruits = ["apples", "lemon", "bacon", "orange", "grapes", "tomato", "banana", "strawberry"];
// index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const lastIndex = fruits.length - 1;

// for - is using to check all elements in array
for (let i = 0; i <= lastIndex; i++) {
    fruits[i] += "-1";
}
console.table(fruits);
// i - variable

// <------------------------------------------------- Function "For ... Of" ------------------------------------------------>

for (const fruit of fruits) {
    console.log(fruit);
}

// If is necessary to change the first index, last index, periodiocity or the elements of the Array, 
// it should be used 'FOR', but not 'For ... of' 



// If you want to call the element of the Array:
console.log(fruits[3]); // --- it will show 'orange'

// Last index in Array:
console.log(lastIndex); // --- it will show '0'

// function Spice 
// Helps to replace an element in Array (table)
fruits.splice(2, 1, "blackberry"); 
// 2 - index in Array;
// 1 - number of index which is neccessary to replace, if you put 0 - the replacement will added after index in Array
// "blackberry" - replacement

console.log(fruits.splice(2, 1, "blackberry")); 
console.table(fruits);   // ----- show Array in table
console.log(fruits.length);

// Additionally, the array in variable const can be changed




// <----------------------------------------------------- Array Matrix ---------------------------------------------------->

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[2][2]); // - helps to summon the element from matrix array (9)

// the function of checking all elements of matrix array

// index 'i' - helps to check lines
for (let i = 0; i < matrix.length; i += 1) {
    console.log('Підмасив матриці matrix[i]: ', matrix[i]);

  // index 'j' - helps to check elements in line
    for (let j = 0; j < matrix[i].length; j += 1) {
      console.log('Елемент підмасив матриці matrix[i][j]: ', matrix[i][j]);
      total += matrix[i][j];
    }
  }


// <---------------------------------------------------- Function .slice -------------------------------------------------->

const secondArray = ['France', 'USA', 'United Kingdom', 'Russia', 'Ukraine', 'China', 'Canada'];

console.log(secondArray.slice(-2));

// Function .slice - helps to copy the elements from array. Usually it has 2 arguments (start, end), which show the copied segment
// Function will not take the last argument in the chosed segment. 
// if the slice brackets are empty, then slice will copy whole array.
// if just use argument start - the algorthm will copy everything after the start argument
// Negative index helps to copy the last index number of elements from the array



// <--------------------------------------------------- Push function in Arrays ------------------------------------------>
// .push - helps to add some element to array in the end
// .pop - helps to remove some element from array in the and shows it meaning
// .unshift - helps to add some element to array in the beginning
// .shift - helps to remove some element from array in the beginning and shows it meaning


let Array = [1, 10, 100, 1000];

const push = Array.push(10000);
console.log(Array.push(10000));  // ---- shows the new quantity of elements

// Functions and Arrays
// Function, that shows common elements in two arrays

function getCommonElements (array1, array2) {
    const result = [];
    for (let i of array1){
        if (array2.includes(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(getCommonElements([10, 20, 30, 40, 50], [4, 30, 50, 40])); 
// function 'push' ----> put elements into array 



// Function below helps to multiply all elements from array on 2

const nums = [1, 2, 3, 4, 5];

for (let indexIn = 0; indexIn < nums.length; indexIn++) {
    nums[indexIn] = nums[indexIn] * 2;
}
console.log(nums);



// This function help to do next cycle:
// until j reach from 0 to 10 --> i(0) = 0. 
// Only after internal cycle will reach its limit, external cycle will increase by 1.
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log('i: ', i);
        console.log('j: ', j);
    }  
}