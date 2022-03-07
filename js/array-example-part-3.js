// Task: 1
// Make a script, which replace the level(cap. letter on small) of every symbol in string on separate.

const string = 'VitaLiY ZhYrYk';
// If is necessary to split the word on different letter, leave the empty place in brackets of split.
const letters = string.split('');
let invertedString = '';
let invertedStringSecondary = '';

console.log(letters);

for (const letter of letters) {
    // console.log(letter);

    if(letter === letter.toLowerCase()) {
        // helps to define the small letters [letter === letter.toLowerCase()] and to change them to capital letters
        console.log(`This letter is small ---> ${letter}`);
        // next line help to launch the letters into one string
        invertedString += letter.toUpperCase();

    } else {
        // helps to define the capital letters [letter === letter.toUpperCase()] and to change them to small letters
        console.log(`This letter is big ---> ${letter}`);
        // next line help to launch the letters into one string
        invertedString += letter.toLowerCase();
       
    }

    // <----------------------------------------------------- OR --------------------------------------------------------------> 
    
    invertedStringSecondary 
        += letter === letter.toLowerCase() 
            ? letter.toUpperCase()
            : letter.toLowerCase();
}

console.log(invertedString);
console.log(invertedStringSecondary);







// Task 2: Make script, which makes a URL, connected by "-", from the string phrase (the title of the page)

// PLAN: 
// 1. normalized the string (all capital or all small letters)
// 2. make an array
// 3. join words in array with separator "-"

// Variable
const title = 'The possibilities of the analitical thinking in emotional control';
console.log(title);

// 1. normalization
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

// 2. Array
const words = normalizedTitle.split(' ');
console.log(words);

// 3. URL creation
const slug = words.join('-');
console.log(slug);

// <------------------------------------------ Alternative way ----------------------------------------------> ${letter}`

const slugOptimized = title.toLowerCase().split(' ').join('-');
console.log(slugOptimized);
// The best way to opimized the code is a combination of all manipulation in one line. Remember for sequence of functions.





// Task 3: Make a script, which calculate the sum of all elements in 2 arrays.

const array1 = [10, 15, 20, 25, 30, 35, 40, 45, 55];
const array2 = [30, 20, 10, 0, 100];
let total = 0;

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    console.log(array2[i]);
}

//  The function above is not good, because of the difference in length in two arrays ---> 
// The formula will count the the same quantity of elements in both arrays, which means that 
// Or it will add the additional elements with meaning 'undefined' to shorter arrays. 
// Or cut from the longer. Both manipulations are made for equality of the quantity of the elements in arrays.

// Solution: 1

for (var i = 0; i < array1.length; i++) {
    total += array1[i];
}

for (var i = 0; i < array2.length; i++) {
    total += array2[i];
}

console.log(total);


// <------------------------------------------------------ OR ----------------------------------------------------------->

// Solution 2

const numbers = array1.concat(array2);
let totalAmount = 0;
// function "concat" - launch both arrays by adding the array in bracket to the array before function in the end.

for (const number of numbers) {
    totalAmount += number;
}
console.log(totalAmount);
// This is shorter solution 







// Function ---> SPLICE
// Task 4: 

// Varbiables:
const cards = [
    'Card - 1',
    'Card - 2',
    'Card - 3',
    'Card - 4',
    'Card - 5',
    'Card - 6',
];

console.table(cards);


// <---------------------------------------- Deleting the element from array-------------------------------------------->
const cardToRemove = 'Card - 5';

const index = cards.indexOf(cardToRemove);
// indexOf - function, that helps to discover the index of the element in the array. 
console.log(index);

console.log(cards.splice(index, 1));
// function splice - helps to delete an element from an array. In console.log it shows the deleted element.

console.table(cards);


// <--------------------------------------- Adding the elements to the array--------------------------------------------->

const cardToInsert = 'Card - 5';

cards.splice(index, 0, cardToInsert);
// It is possible to add the elements to the array by using splice

// .splice (x, y, z)
// x - the start index of adding the elements to the array
// y - if the goal is adding it is equal to 0, but it means the number of deleting elements
// z - the part, which is necessary to add (it can be single element, array, or multiple arrays) 

console.table(cards);

// <---------------------------------------- Splice in replacement of element------------------------------------------->

const cardToUpdate = 'Card - 5 (new edition)';

cards.splice(index, 1, cardToUpdate);
console.table(cards);

/*
 * Для чисел менше ніж поріг спрацьовує continue, виконання тіла припиняється
 * і управління передається на наступну ітерацію.
 */
const numbersSecond = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbersSecond.length; i += 1) {
  if (numbersSecond[i] < threshold) {
    continue;
  }
  // continue - help to pass through the 'for' by using everything, except 'for'
  console.log(`Число більше ніж ${threshold}: ${numbersSecond[i]}`); // 18, 29, 34
}
