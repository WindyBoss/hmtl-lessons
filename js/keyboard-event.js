/*
Keyboard event Listen 

Types of events:
 - keypress
 - keydown
 - keyup

Keypress limits

Properties: KeyboardEvent.key and KeyboardEvent.code

*/


const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keydown', onKeypress); // -> put Keyboard event listener on whole window (whole Keyboard)
// window.addEventListener('keypress', onKeypress); // -> put Keyboard event listener on whole window (only letters)
/* 
-> keydown save all event keypress includes 'ESC', 'Space', 'Shift'
-> KeyboardEvent.key -> value that was really pressed including other alphabets ("Ж", "ю" and others)
-> KeyboardEvent.code -> value that was pressed and translated on english alphabet ('a' -> 'a', 'ч' -> 'x')
-> 
*/

function onKeypress(event) {
    console.log(event);
    console.log('event.key ->', event.key);
};

function onClearOut() {}
