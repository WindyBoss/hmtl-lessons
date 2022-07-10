/* 
* Chatty events - events, which happened always (for ex. mouse move)
*/

/* 
* mouse move and throttle
* throttle -> lodash library function, which cuts the number of records of chatty events
* with the breaks of timer X millisecond  
*/

/*
* mouse move counter without throttle
*/
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0; // -> it is better to use 'let'

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
    mouseMoveCbInvocationCounter += 1; // -> the counter change
    coordsOutputRef.textContent = `
    Number of calls of onMouseMove: ${mouseMoveCbInvocationCounter}
    X: ${e.clientX},
    Y: ${e.clientY}
    `;
};

/*
* mouse move counter with throttle
*/

const input = document.querySelector('.js-input'); 
const throttledCoordsOutputRef = document.createElement('p'); // -> creation of the element
document.body.insertBefore(throttledCoordsOutputRef, input); // -> insertion of the element before chosen input

const throttledOnMouseMoveVariable = _.throttle(throttledOnMouseMove, 500); // -> throttled moused-moved function
window.addEventListener('mousemove', throttledOnMouseMoveVariable); // -> add EventListener to window

let throttledMouseMoveCbInvocationCounter = 0; // -> another type of counter

function throttledOnMouseMove(e) { // -> other function with another counter 
    throttledMouseMoveCbInvocationCounter += 1; 
    throttledCoordsOutputRef.textContent = `
    Number of calls of onMouseMove: ${throttledMouseMoveCbInvocationCounter}
    X: ${e.clientX},
    Y: ${e.clientY}
    `; 
};

/* 
-------------------------------- INPUT AND DEBOUNCED --------------------------------
*/


/*
* input without debounced
*/

const inputRef = input;
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounteer = 0;

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
    inputCbInvocationCounteer += 1;

    outputRef.textContent = `
    Number of calls of onInputChange: ${inputCbInvocationCounteer}.
    Meaning: ${e.target.value}
    `;
};

/*
* input with debounced
*/

const debouncedOutputRef = document.createElement('p');
const script = document.querySelector('script');
document.body.insertBefore(debouncedOutputRef, script);
let debouncedInputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(debouncedOnInputChange, 500));

function debouncedOnInputChange(e) {
    debouncedInputCbInvocationCounter += 1;

    debouncedOutputRef.textContent = `
    Number of calls of onInputChange: ${debouncedInputCbInvocationCounter}.
    Meaning: ${e.target.value}
    `;
}