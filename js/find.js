/* 
Array.prototype.find()
- checks all elements of the array
- returns find elements of the array, which match the conditions or undefined
*/

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
console.log(number);

console.log('<---------------------->');

const numbersReverse = numbers.reverse();
console.log(numbersReverse);

console.log('<---------------------->');

const numberReverse = numbersReverse.find(number => number > 10);
console.log(numberReverse);

console.log('<---------------------->');

const numberReverseUndefined = numbersReverse.find(number => number === 100);
console.log(numberReverseUndefined);

console.log('<---------------------->');


// players 
const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];



// Find the player by name
const nameToFind = 'Marta';
const playerByName = players.find(player => player.name === nameToFind);
console.log(playerByName);
console.log('<---------------------->');
// Find the player by id
const playerToFind = 'player-2';
const playerById = players.find(player => player.id === playerToFind);
console.log(playerById);
console.log('<---------------------->');

// function to find the player by name
const findPlayerByName = (allPlayers, playerName) => allPlayers.find(({ name }) => name === playerName); // with destructing
console.log(findPlayerByName(players, 'Alex'));
console.log(findPlayerByName(players, 'Vitek'));

console.log('<---------------------->');

const findPlayerById = (allPlayers, playerId) => allPlayers.find(({ id }) => id === playerId);
console.log(findPlayerById(players, 'player-1'));
console.log(findPlayerById(players, 'player-5'));