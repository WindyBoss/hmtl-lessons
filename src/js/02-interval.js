import '../css/common.css';
const logger = time => console.log(`Log every ${time}ms - ${Date.now()}`);

/*
* Date.now() -> shows how many milliseconds passed after 1970.01.01, which is the time, when computers started to count the time
*/

const intervalId = setInterval(logger, 2000, 2000)
const shouldCancelInterval = Math.random() > 0.5;
console.log('IntervalId: ' + intervalId);
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
    clearInterval(shouldCancelInterval);
}