/* 
Instead of using middle variables it is better to use chaining techniques
*/

const numbers = [1, 5, 2, 4, 3];

const greaterThenOneAndPaired = numbers.filter(number => number > 1 && number % 2 === 0);
console.log(greaterThenOneAndPaired);

const multByFour = greaterThenOneAndPaired.map(number => number * 4);
console.log(multByFour);

const sorted = multByFour.sort((a, b) => b - a);
console.log(sorted);

// the previous code can be written in one chain

const sortedShort = numbers
    .filter(number => number > 1 && number % 2 === 0)
    .map(number => number * 4)
    .sort((a, b) => b - a);

console.log(sortedShort);


// chaining can be used in the property of the objects in the array
const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];

const onlineAndSortedIncTime = [...players]
    .filter(player => player.online)
    .sort((currentPlayer, nextPlayer) => currentPlayer.timePlayed - nextPlayer.timePlayed);

console.table(onlineAndSortedIncTime);

const offlineAndSortedDecRank = [...players]
    .filter(player => !player.online)
    .sort((currentPlayer, nextPlayer) => nextPlayer.points - currentPlayer.points);

console.table(offlineAndSortedDecRank);



// Chaining in the methods of the objects

const element = {
    name: '',
    email: '',
    online: false,
    changeName(newName) {
        this.name = newName;
        // without this code return undefined
        return this;
    },
    changeEmail(newEmail) {
        this.email = newEmail;
        return this;

    },
    changeOnlineStatus() {
        this.online = !this.online;
        return this;

    },
}
console.log(element);
element.changeName('Vitek').changeEmail('vitek@gmail.com').changeOnlineStatus();
console.log(element);


// the code from reduce.js 
const tweets = [
    { id: '000', likes: 10, tags: ['js', 'react', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'nodejs'] },
    { id: '002', likes: 16, tags: ['html', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'html', 'nodejs'] },
    { id: '004', likes: 22, tags: ['js', 'nodejs', 'css'] },
    { id: '005', likes: 4, tags: ['nodejs', 'js'] },
];


//insted of two separate operation the next method can do both at one time
const tagsStats = tweets.flatMap(tweet => tweet.tags)
    .reduce(
    (acc, tag) => ({
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
);

console.log(tagsStats);