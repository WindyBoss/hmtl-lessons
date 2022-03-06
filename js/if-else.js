// <!----- If else body -----> 
// if (true) --> {make x} , 
//   but 
// if(false) --> {make y}


// <!-------- example of multiple choice ---------------> 

let salary = prompt("write your salary to check your income level");

if (salary <= 5000) {
    console.log('level 1');
} else if (salary > 5000 && salary <= 8000){
    console.log('level 2');
} else if (salary > 8000 && salary <= 10000) {
    console.log('level 3');
} else {
    console.log('level 4');
}

// <!------- example of double choice ------------->

const balance = -10;

if (balance >= 0){
    console.log('positive answer');
} else {
    console.log('negative answer');
}

// is the same as the

console.log(balance >= 0 ? 'positive answer' : 'negative answer');

// "?" - trenary operator OR Conditionary operator ---> presents the choice or. 
// It replace the function 
// if () {} 
//else {}
// if the solution is true - the result will be after "?", else after ":"

// use the trenary operator only for simple function


// <----------------- Conditionary Operator and Functions ------------------->
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  
    message = password === "jqueryismyjam" ? 'Access is allowed' : 'Access denied, wrong password!';
    
    // Change code above this line
    return message;
  }