/* 
Array.prototype.flat(depth)
- iron the array to the written depth
- the depth = 1 by default
*/

const array = [1, 2, [4, [5]], [6, [7, [8, [9]]]]];
console.log(array);
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(3));
console.log(array.flat(4));



/*
Array.prototype.flatMap(callback)
- combination of map (firstly) + flat (secondly)
*/


const tweets = [
    { id: '000', likes: 10, tags: ['js', 'react', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'nodejs'] },
    { id: '002', likes: 16, tags: ['html', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'html', 'nodejs'] },
    { id: '004', likes: 22, tags: ['js', 'nodejs', 'css'] },
    { id: '005', likes: 4, tags: ['nodejs', 'js'] },
];

const tagsLong = tweets.map(tweet => tweet.tags) /* --> return array of arrays*/
    .flat(); /* --> return array of tags */
console.log(tagsLong);

//insted of two separate operation the next method can do both at one time
const tags = tweets.flatMap(tweet => tweet.tags);
console.log(tags);

// read more: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Object/Array/flatMap
