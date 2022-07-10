/* 
Array.prototype.reduce()
- checks all elements in original array
- returns everything
- change everything in array
*/

const numbers = [5, 10, 15, 20, 25];
const return5 = numbers.reduce(() => {
    return 5;
});

console.log(return5);

console.log('<------------------------------------------------->');

const training = numbers.reduce((acc, number) => {
    console.log('acc', acc);
    console.log('number', number);

    return 100;
}, 10000);

console.log('<------------------------------------------------->');

console.log(training);

console.log('<------------------------------------------------->');

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

console.log('<------------------------------------------------->');
/* 

Reduce works:

acc = 0 --> number = 5 return 0 + 5
acc = 0 --> number = 10 return 5 + 10
acc = 0 --> number = 15 return 10 + 15
acc = 0 --> number = 20 return 15 + 20
acc = 0 --> number = 25 return 20 + 25

*/

const salary = {
    mango: 100,
    poly: 50,
    ajax: 250,
};

const allSalariesInArray = Object.values(salary);
console.log(allSalariesInArray);

console.log('<------------------------------------------------->');

const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
console.log(totalSalary);

console.log('<------------------------------------------------->');


// Players 
const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];

// the next code calculate sum  of timePlayed of all players
const totalTimePlayed = players.reduce((totalTime, player) => totalTime += player.timePlayed, 0);
console.log(totalTimePlayed);



// reduce in combination
const cart = [
    { label: 'Apple', price: 100, quantity: 5 },
    { label: 'Banana', price: 150, quantity: 3 },
    { label: 'Lemon', price: 70, quantity: 8 },
];

const totalAmount = cart.reduce((total, {price, quantity}) => total += price * quantity, 0);
console.log(totalAmount);


const tweets = [
    { id: '000', likes: 10, tags: ['js', 'react', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'nodejs'] },
    { id: '002', likes: 16, tags: ['html', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'html', 'nodejs'] },
    { id: '004', likes: 22, tags: ['js', 'nodejs', 'css'] },
    { id: '005', likes: 4, tags: ['nodejs', 'js'] },
];

// Code optimization
//Step 1: create a code
const allTags1 = tweets.reduce((tags /* the array of arrays */, tweet) => {
    tags.push(tweet.tags);/* --> this code changes the array by the link, which is not good for repeatable using
    It is better to make a copy and after that to use 'push' like in step 3*/
    return tags;
}, [] /* --> it is better to add beginning accumulator */ );
console.log(allTags1); /* - returns array of arrays */

//Step 2: make a spread
const allTags2 = tweets.reduce((tags, tweet) => {
    tags.push(...tweet.tags); /* --> this code changes the array by the link, which is not good for repeatable using
    It is better to make a copy and after that to use 'push' like in step 3*/
    return tags;
}, []);
console.log(allTags2); /* return array of all tags */

//Step 3: make a copy
const allTags3 = tweets.reduce((tags, tweet) => { 
    return [...tags,...tweet.tags]; // --> it creates a copy before spread of tags
}, []);
console.log(allTags3); /* return array of all tags */


//Step 4: hidden return
const allTags4 = tweets.reduce((tags, tweet) => [...tags,...tweet.tags], []);
console.log(allTags4); /* return array of all tags */


// The next code calculate: how many times was used any of the separate tags
//Code optimization
// Step 1: make a working code
const tagsStats = allTags4.reduce((acc, tag) => {
    // console.log(acc);
    if (acc[tag]) {   // --> this syntax shows the next logic --> if acc includes tag 
        acc[tag] += 1;

        return acc;
    }

    acc[tag] = 1;

    return acc;

}, {});

console.log(tagsStats);

// Step 2: use spread and '? :' 
const tagsStats2 = allTags4.reduce((acc, tag) => {
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
    },
{});

console.log(tagsStats2);

// Step 3: hidden return 
const tagsStats3 = allTags4.reduce(
    (acc, tag) => ({
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
);

console.log(tagsStats3);

/* 
acc[tag] 
It is from the next code 

const user = {
    name: 'Mango',
};

const key = 'name';
console.log(user[key]);
*/