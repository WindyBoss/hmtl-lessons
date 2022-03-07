import '../css/common.css';

/*
const date = new Date(); // --> date is an Object
console.dir(date);
console.log(date.getDay()); // -> day of week start from 0 - Sunday
console.log(date.getTime()); // -> miliseconds from 1970.01.01
*/

const date1 = Date.now();

setTimeout(() => {
    const date2 = Date.now();
    const timeDifference = date2 - date1;
    console.log(timeDifference);
}, 1000);