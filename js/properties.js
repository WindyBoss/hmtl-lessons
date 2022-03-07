// Data attribute

const actions = document.querySelectorAll('.js-actions button');
console.log(actions); // --> the array of all buttons in div
console.log(actions[0]); // --> first element of the array
console.log(actions[0].dataset); // --> shows the data attribute 
/* 
All DOM elements have the methods and properties
Data attribute is the same as class in CSS, Id or other ways to connect the HTML element with other languages.
.dataset --> shows the data attribute, which was added to the specific DOM element
It will show the next symbols: DOMStringMap {(data-name): (data-value)} 
console.log(actions[0].dataset); --> DOMStringMap {action: 'add'}
*/
console.log(actions[0].dataset.action); // --> add
console.log(actions[1].dataset.action); // --> remove
console.log(actions[2].dataset.action); // --> edit
// it is the same s next console.log();
console.log(actions[1].getAttribute('data-action')); // --> remove


const magicBtn = document.querySelector('.make-a-magic');
magicBtn.addEventListener('click', () => {
    const inputRef = document.querySelector('.js-input');
    const titleRef = document.querySelector('.hero-title');
    // console.log(inputRef);
    titleRef.textContent = inputRef.value;  // --> change the title for the value of input
})