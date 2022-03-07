/*
Events in brawser
function naming
    - creation and deleting of the eventListener
    - handle: handleEvent and handleSubjectEvent
    - handler: eventHandler and subjectEventHandler
Linked indentity of callback
Event Object

https://developer.mozilla.org/en-US/docs/Web/Events

*/

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// the first you must add the name of event
// the second you must put the callback function

// the next code will work properly
addListenerBtn.addEventListener('click', event => {
    console.log(event);
    targetBtn.addEventListener('click', handleTargetButtonClick);
    console.log('Adding the event listener on the target button'); 
})


removeListenerBtn.addEventListener('click', event => {
    targetBtn.removeEventListener('click', handleTargetButtonClick);
    console.log('Removing the event listener on the target button'); 
})

// the function must be added separately to the brackets of the previous function, because it will the same links to the one function
function handleTargetButtonClick (event) {
    console.log('click');
};

/*
the next code cannot remove the event listener, because it is not the same function, 
which is written second in the brackets of the function 'removeEventListener'.

removeListenerBtn.addEventListener('click', () => {
    targetBtn.removeEventListener('click', () => {
        console.log('click on target Button');
    });
    console.log('Removing the event listener on the target button'); 
})

/*

function handleTargetButtonClick () {
    console.log('click');
};

other options of naming the function:
- targetButtonClickHandler
- onTargetButtonClick
*/

function logMessage () {
    console.log('click on Target Button');
};