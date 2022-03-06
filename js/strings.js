// such function help to measure the lenght of the phrase.

const message = 'In this line 24 symbols.';
console.log(message.length);


// Concatenation of phrases.
const firstName = 'Vitaliy';
const lastName = 'Zhyryk';

const room = '530';
const roomType = 'VIP';

//example 1
const welcomeMsg = 'Guest ' + firstName + ' ' + lastName + ' ' + '- welcome to ' + room + ' ' + roomType;
console.log(welcomeMsg);

//example 2
const welcomeMessage = `Guest ${firstName} ${lastName} - welcome to ${room} ${roomType}`;
console.log(welcomeMessage);


// Normalization - toLowerCase()
// It makes all letter Lower
const brand = 'aDiDAS';
const normalizedBrand = brand.toLowerCase();

console.log(normalizedBrand);

//Particular Normalization - toLowerCase()
// .slice() - helps to take a part of the word
let company = 'cOcACoLa';
console.log(company[2]);
console.log(company.slice(1).toLowerCase());

company = company[0] + company.slice(1).toLowerCase();

console.log(company);


// Strings measure

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;   // <---- measure the length of courseTopic --->
const firstElement = courseTopic[0];            // <---- show the first element (letter)   --->
const lastElement = courseTopic[courseTopic.length - 1]; // <---- show the last element (letter) --->


// <---------------- String Slice in Function -------------->
function getSubstring(string, length) {
    const substring = string.slice(0, length); // Change this line
  
    return substring;
}

// The result is cutting the phrase after the some length


// <------------ Directive ".includes" ----------------------->
// includes helps to find the part of phrase in this phrase, if it exists in the phrase - it shows true, else - false
function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
     return result;
   }



// <------------ Combination of .includes and toLowerCase ---------------->
// function help to take the part of phrase, convert all letter to small (from a part of phrase) and check if the phrase possess it -->

function checkForSpam(message) {
    let result;
    // Change code below this line
    
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
      
    // Change code above this line
    return result;
}

// endsWith method - checks the end of string

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false


// Method replace() and replaceAll() -> returns the 1 or all elements and replace the chosen parts
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
