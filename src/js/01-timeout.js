import '../css/common.css';

const MAIN_DELAY = 3000;
const SECOND_DELAY = 2000;

function logMessage(delay) {
    console.log(`Make a call back after ${delay} ms`);
};

setTimeout(() => {
    logMessage(MAIN_DELAY);
}, MAIN_DELAY);

setTimeout(() => {
    logMessage(SECOND_DELAY);
}, SECOND_DELAY);


setTimeout( x => {
    console.log(x);
}, SECOND_DELAY, 1000); // -> this thousand will be on the place if x

/* 
Syntax of setTimeout():
* SetTimeout((arguments) => {}, delay, arguments)
*/

const logger = time => {
    console.log(`Console log after ${time}ms, because timer wasn't switched off`);
};

const timerId = setTimeout(logger, 2000, 2000); // - for each timer browser add its own id, and it is necessary for switch off the timer
console.log(timerId);

const shouldCancelTimer = Math.random() > 0.5;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
    clearTimeout(timerId);
    console.log('Timer was switched off');
};