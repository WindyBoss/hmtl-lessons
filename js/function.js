// <------------------------------------------ Functions ------------------------------------------------>
// The duty of functions is to take a information, remake it according to its goals and give it back.
// Function without summoning is an instrument without using

// function help to use multiple times something that is inside the function by naming it.

function multiply() {
    // body of function
    console.log("multiply function invocation");
  }
  
    // summoning of the function 
  multiply(); // multiply function invocation
  multiply(); // multiply function invocation
  multiply(); // multiply function invocation


// function also can have parameters in brackets, that can be used during summoning.
  function add(a,b,c) {
    console.log(`Addition result equals ${a + b + c}`);
  }
  
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);

  console.log(add(15, 27, 10));

  // <-------------------------------------- the result in variables ------------------------------------------>
  
  // Good practice is to put the result of functions in variables for future using
  const functionResult = add(15, 27, 10);


  
  // For example the result of the function above in console will be next:
  //   add(15, 27, 10) --> Addition result equals 52   -> the sum of the parameters in brackets, that is written in brackets in summoning.
  //   add(10, 20, 30); --> Addition result equals 60   -> the sum of the parameters in brackets, that is written in brackets in summoning.
  //   add(5, 10, 15); --> Addition result equals 30   -> the sum of the parameters in brackets, that is written in brackets in summoning. 




  //   <--------------------------------------- Operator "Return" -----------------------------------------------> 

  function multiplySecond(x, y, z) {
    console.log("Code before return behaves as normal"); 
    
    return x * y * z;
  
    console.log("This log is after return, so it will not be played"); 
  }
  // Without 'Return' the result of the function will be undefined.

  // For interpretator it does not metter the deepness of the function. Even if in function will be if in if in if and
  // in the deepest level will be return the function will stop.

  // Return helps to take the result of function and use it. Everything after results in brackets of function are not working.
  // All actions after return in function brackets are ignored and interpretator act the code after brackets.
  // Additionally the operator return needs to have a function in definition. ---> return x * y * z

  let result = multiplySecond(2, 3, 5);
  console.log(result); // 30
  
  result = multiplySecond(4, 8, 12);
  console.log(result); // 384
  
  result = multiplySecond(17, 6, 25);
  console.log(result); // 2550



  // The way to summon parameters of the function to the variables ---> ${}
  function makeMessage (name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
  };  // this function create a message from parameters
  
  console.log(makeMessage (40, 30));


  // Boolean in function 
  
  function isAdult(age) {
    let passed=age>=18;   // ---> how to write a function check in Variables
    return passed;
  }
  
  console.log(isAdult(20));
  console.log(isAdult(14));
  console.log(isAdult(8));
  console.log(isAdult(37));
// this function checks is the parameters 'age' in segment 18+



  // how to write a function check in Variables --->const isInRange = number >= start && number <= end; <---
  function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; 
  
    return isInRange;
  }

  console.log(isNumberInRange(50, 100, 10)); // = shows false, because 10 is not inside 50 <---> 100 segment

  // <------ Combination of Function and Strings formulas (length and slice)
  // the result is --> cutting the part of the phrase if the phrase is longer than maxLength and add the '...' in the end

  function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    if (message.length > maxLength) {
        result = message.slice(0, maxLength) + '...';
      } else {
        result = message;
      }
        
    /// Change code above this line
    return result;
  }  // this function helps to cut the message, if its length is bigger tham length limit and add '...' in the end
  console.log(formatMessage(`You picked apple, price per item is 30 credits`, 30));





  // <---------------------------------------------- EXAMPLES ------------------------------------------------------>
// for KW algorythm

  const keyword = '';
  const phrase = '';

  function keywordFilter (keyword, phrase) {

    if (phrase.includes(keyword)) {
      return phrase;
    }
    return "";
  }