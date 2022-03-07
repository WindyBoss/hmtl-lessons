/* 
For connection js code with browser, it can be used two ways:

query.selector
*/

console.log(window); // --> the main object which possesses all methods of the browser
console.log(document); // --> the HTML code
console.dir(document); // --> the HTML code


// QuerySelect - looks for until the first match and returns it
const buttonElCSS = document.querySelector('.button');
console.log(buttonElCSS); // return the link for HTML documents by using CSS selector

const buttonElHTML = document.querySelector('button');
console.log(buttonElHTML); // return the link for HTML documents by using HTML tag

const buttonElId = document.querySelector('#button');
console.log(buttonElId); // return the link for HTML documents by using Id selector

const buttonEl= document.querySelector('.button-type');
console.log(buttonEl); // return 'null' if nothing is found


const allInputsRef = document.querySelectorAll('.input');
console.log(allInputsRef); // return all elements with the same selector in 'array' --> forEach can be used for all of them
// if such selector is not found it will returns empty array


// it is possible to start the search of element from specific place, which can be chosen in variable.
const listEl = document.querySelector('.doc-ul'); 
console.log(listEl);
// but it cannot be used in situation of double multiple selection. Another words listEl -> cannot be querySelectorAll
// If liEl must be equal to listEl.querySelectorAll 
const liEl = listEl.querySelectorAll('.doc-li');
console.log(liEl);

// the same code is next, but can select all elements

const liEl2 = document.querySelectorAll('.doc-ul .doc-li');
console.log(liEl2);

// It is possible to change HTML attributes by using JS. Example below
buttonElCSS.addEventListener('click', () => {
    const imageChange = document.querySelector('.image'); // button works only with single change of image
    imageChange.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYxY3ns8HOXSKOe85iWVK7LqzwuzEav54Fw&usqp=CAU';
    imageChange.alt = 'Koenigsegg Gemera';
    console.log(imageChange);
});

/* Additionally there are couple of methods in JS for works with attributes of HTML

getAttribute(); --> the same as .attribute
setAttribute(); --> the same as .attribute = ...
removeAttribute(); --> neccessary for deleting attributes
hasAttribute(); --> checks does the tag possesses attribute
*/

const imageAttributes = document.querySelector('.image-two');
console.log(imageAttributes);
console.log("imageAttributes.getAttribute('src') =>", imageAttributes.getAttribute('src'));
console.log("imageAttributes.src => ", imageAttributes.src);

// removes attribute 
imageAttributes.removeAttribute('src'); 
console.log(imageAttributes);

// set attribute
imageAttributes.setAttribute('src', 'https://www.auto-motor-i-sport.pl/media/lib/2742/2021-bugatti-chiron-super-sport-300.jpg');
console.log(imageAttributes);

