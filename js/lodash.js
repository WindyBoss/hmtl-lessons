/*
Lodash.com - library of the already created methods and instruments, which can used in your work
It is better to use it for complicated operations
[Lodash Library](https://github.com/lodash/lodash)
*/

console.dir(_); // --> show all available methods in lodash

/*
Method: isEmpty()
check is the object or array in brackets empty
*/
console.log(_.isEmpty({/*empty*/ })); // --> return true or false
console.log(_.isEmpty({ a: 1 }));

/*
Method: get()
can get everything, no matter on depth
https://lodash.com/docs/4.17.15#get
*/

const user = {
    name: 'Mango',
    location: {
        city: 'London',
        street: 'Baker Street'
    },
};

console.log(_.get(user, 'location.city'));
console.log(_.get(user, 'location.street'));
console.log(user.location.street);

// console.log(user.location.house.flat); --> return mistake, cause flat of undefined
// console.log(_.get(user, 'location.house.flat')); return undefined

/* 
the next code will show how works get 'behind the scene'
*/

if (user && user.location && user.location.city) {
    console.log(user.location.city);
}
// <-------------------- But There is a new syntax -------------------->

console.log(user?.location?.city);

/* 
Method: union() - can connect two arrays inside one array
*/
console.log(_.union([1, 2, 3], [4, 5, 6]));

/* 
Method: range() - generates an array of numbers between first included and last values excluded by one default
https://lodash.com/docs/4.17.15#range
*/
console.log(_.range(1, 5)); // --> [1, 2, 3, 4]
console.log(_.range(1, 6)); // --> [1, 2, 3, 4, 5]
console.log(_.range(1, 7, 2/* -> +2*/ )); // --> [1, 3, 5]
console.log(_.range(5)); // --> [0, 1, 2, 3, 4]

/*
Method: sortBy()
can sort by using value of properties of the object in the array
*/

const tweets = [
    { id: '000', likes: 10, tags: ['js', 'react', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'nodejs'] },
    { id: '002', likes: 16, tags: ['html', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'html', 'nodejs'] },
    { id: '004', likes: 22, tags: ['js', 'nodejs', 'css'] },
    { id: '005', likes: 4, tags: ['nodejs', 'js'] },
];

console.log(_.sortBy(tweets, tweet => tweet.likes)); // it is the same as lower code
console.log(_.sortBy(tweets, ['tweet', 'likes']));

/*
 Methods: sum() and sumBy()
 */

console.log(_.sum([1, 2, 3, 4, 5])); // 15
console.log(_.sumBy(tweets, tweet => tweet.likes)); // 62 - sum of all likes in tweet

/*
Methods: min(), max(), minBy() and maxBy()
*/

console.log(_.min([1, 2, 3, 4, 5])); // 1
console.log(_.max([1, 2, 3, 4, 5])); // 5
console.log(_.minBy(tweets, tweet => tweet.likes)); // -> the list likes { id: '001', likes: 2, tags: ['html', 'nodejs'] },
console.log(_.maxBy(tweets, tweet => tweet.likes)); // -> the most likes  { id: '004', likes: 22, tags: ['js', 'nodejs', 'css'] },

console.log(_.maxBy(tweets, tweet => tweet.likes).id); // -> the most likes id -> '004'
console.log(_.minBy(tweets, tweet => tweet.likes).id); // -> the list likes id -> '001'


/*
Methods: camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
*/

console.log(_.kebabCase('a b c')); // a-b-c
console.log(_.camelCase('long story short')); // longStoryShort
console.log(_.capitalize('long story short')); // Long story short
console.log(_.upperCase('long story short')); // LONG STORY SHORT
console.log(_.lowerCase('LONG STORY SHORT')); // long story short
