/* 
Array.prototype.every()
- check all elements of the array
- return true if all elements of the array match the conditions
*/

const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];

const isAllOnline = players.every(player => player.online);
console.log("isAllOnline: -->", isAllOnline);

console.log('<------------------------------------------------->');



/* Array.prototype.some()
- check all elements of the array
- return true if one of elements of the array match the conditions
*/

const playerMoreThan700 = players.some(player => player.timePlayed > 700);
console.log("playerMoreThan700: -->", playerMoreThan700);

console.log('<------------------------------------------------->');
