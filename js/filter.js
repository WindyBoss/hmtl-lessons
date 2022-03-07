/* 
Array.prototype.filter()
- check all elements of the array
- return new array (with elements or empty)
- add in the new array elements of the old array which match the conditions
- if callback return true - the elements is added to new array
- if callback return false - the elements isn't added to new array
*/

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number > 20 || number < 10);
console.log(filteredNumbers);


const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];

// online players
const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);

// offline players
const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

// all players with played time more than 300
const hardPlayers = players.filter(player => player.timePlayed > 300);
console.table(hardPlayers);

// backend for training => apt-booking-api.herokuapp.com/apartments
