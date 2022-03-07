// the solution of difference in arguments in array in function

// Task 1: Make a function, that combine 2 arrays with dfferent arguments quantity. 

const fn = function () {
    console.log(arguments);
// arguments - local variable in all function, except linear, that do not need to be declared. 
// The array in arguments are not full. It does not have a lot of function, like .push and .pop. 
// If you want to use all functions, you should transform it to normal array. 'For' - works for pseudo-array

    const args = Array.from(arguments);
    // Array.from - transform 'arguments' to normal array, that can take all normal function of arrays. 
    // Array.from - old-school method.
}

// <----------------------------------------------- Other methods -------------------------------------------------------->


fn(1, 2, 3, 4);
fn(1, 2, 3, 4, 5, 6);
fn(1, 2, 3, 4, 5, 6, 7);

const fb = function (a, b, c, d, ...args) {
    // ...x - the newest way to make array in function, without array.from. Instead of 'X' - can be any variable.
    console.log(`${a}, ${b}, ${c}. ${d} ${args}`);
    // it is possible to add parameters, ONLY BEFORE '...X'. 
    // It is useful, when is necessary to get rid of the elements in the beginning.
    console.log(args);

}

fb(1, 2, 3, 4);
fb(1, 2, 3, 4, 5, 6);
fb(1, 2, 3, 4, 5, 6, 7);


// Task 2: Make a function, which can make a sum of all numbers in array, does not matter the quantity of the numbers

const addFunction = function (...args) {
    console.log(args);
    let total = 0;

    for (const element of args) {
        total += element;
    }

    return total;
}

console.log(addFunction(1, 2, 3, 4)); // 10
console.log(addFunction(1, 2, 3, 4, 5, 6)); // 21
console.log(addFunction(1, 2, 3, 4, 5, 6, 7)); // 28



// Task 3: Make a function, which can take 2 arrays, with different lengths, and create the third one with only common elements.

const commonElements = function(array, ...args) {
    // console.log(`array: ${array}`); - shows array of 'array'
    // console.log(`args: ${args}`);  - shows array of 'args'
    
    let uniqueElements = [];
    // This variable is necessary to declared for preventing the mistake.

    for (const arg of args) {
        if (array.includes(arg)) {
            // console.log(arg);
            uniqueElements.push(arg);
        }
    }
    return uniqueElements;
}

console.log(commonElements([1, 2, 3, 4], 2, 5, 1, 3));
console.log(commonElements([1, 2, 3, 4, 5, 6], 6, 10, 22, 1));
console.log(commonElements([1, 5, 3, 7, 2], 2, 77, 7, 3, 9));
console.log(commonElements([1, 2, 3, 4, 5, 6, 7], 3, 60, 25, 99, 1));



//Example 
function getExtremeElements(array) {
    // Change code below this line
      const firstElement = array[0];
      const lastElement = array[array.length - 1];
      const newArray = [firstElement, lastElement];
    
    return newArray;
    // Change code above this line
  }

  console.log(getExtremeElements([1, 4, 6, 8, 10]));



// Example
  function calculateEngravingPrice(message, pricePerWord) {
    const messageLength = message.split(" ").length;
    //.split - create an array from message with the separator in brackets
    //.length - measure the number of indexs in array
    console.log(messageLength);  
    const totalPrice = messageLength * pricePerWord;
    // Change code above this line
    return totalPrice;
}

console.log(calculateEngravingPrice('The possibilities of the analitical thinking in emotional control', 20));


// Tasks
// 1
function slugify(title) {
    // Change code below this line
  const slug = title.toLowerCase().split(" ").join("-");

  console.log(slug);  
  
  return slug;
    // Change code above this line
  }

  console.log(slugify('The possibilities of the analitical thinking in emotional control', 20));

//2 
function calculateTotal(number) {
   let totalAmound = 0;
   for (let i = 0; i <= number; i += 1) {
     totalAmound += i;
   return totalAmound;
   }
   return totalAmound;
}

//3 

function findLongestWord(string) {
  const words = string.split(" ");
    let theLongestWord = ('');

  for (let i = 0; i < words.length; i++) {  
    if (words[i].length > theLongestWord.length) {
        theLongestWord = words[i]; 
    }
  }
  return theLongestWord;
  // return - must be outwside for and if, because of the reason, that being inside it cuts the cycle
}

  console.log(findLongestWord('The possibilities of the analitical thinking in emotional control'));


  // 4
  function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    // numbers.push(min);
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    //   for (let i=0; i<=max; i+=1) {
    //       if (numbers[i]+1<=max) {
    //         numbers.push[i]+1;
    //         console.log(numbers);
    //       }
    //   }
    // Change code above this line
    return numbers;
  }

  console.log(createArrayOfNumbers(1, 4));

  // 5



/* 
the next function can be called even higher that declaration, 
but if wlll be the next syntax
* const multiply = function (...args) {}
such function can be called only after declaration
*/
function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  10
console.log(multiply(1, 2, 3, 4, 5)); //  15