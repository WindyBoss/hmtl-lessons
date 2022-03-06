// <-------- EXAMPLE ONE ----------->

// Task: Make a script to check the number, which is written by user, if it is inside the number segment. 

const max = 100;
const min = 50;

let number = prompt('Write the random number');

console.log(`Number ${number} is inside number segment from ${min} to ${max}`, number > min && number < max);

// Task: Make a script to check the number, which is written by user, if it is outside the number segment. 

console.log(`Number ${number} is outside number segment from ${min} to ${max}`, number < min || number > max);




// <----------- EXAMPLE TWO ---------->

// Task: Make a script to check the possibility of chat with the next conditions:

// -- is online
// -- is friend
// -- not in offline mode

//using the next variables


let isOnline = Boolean(confirm('Are you Online?'));
const isFriend = true;
const offLineMode = false;

console.log('Can we open the chat?', isOnline == true && isFriend && !offLineMode);




// <---------- EXAMPLE THREE ---------->

//Task: Make a script to check the level of subscribers for access to account
//Conditions: Only Pro or VIP have an access, but not Free

const sub = 'pro';

console.log('Do you have an access?', sub === 'pro' || sub ==='vip')
