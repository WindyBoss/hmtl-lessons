/* 
Array.prototype.map()
- cycle the array
- doesn't change the Array
- return the same length array
*/

const numbers = [5, 10, 15, 20, 25];

const doubleNumbers = numbers.map(number => {
    console.log(number);
    // return 555; --> doubleNumbers = [555, 555, 555, 555, 555]
    return number * 2;
});

console.log(numbers);
console.log(doubleNumbers); // -> doubleNumbers = [10, 20, 30, 40, 50]


const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];

/*
Example of the body the arrow function
const playersNames2 = players.map(() => { });
*/

/*
const playersNames = players.map(player => {
    console.log(player);
    return player.name;
});

this is the function with visible return, but below is presented the same function with hidden return.
*/

//example -1
const playersNames = players.map(player => player.name); // -->  ["Mark", "Vitek", "Alex", "Marta", "Andrew"]
console.log('playersNames', playersNames);

const playersId = players.map(player => player.id); // -->  ["player-1", "player-2", "player-3", "player-4", "player-5"]
console.log('playersId', playersId);


// code optimization + map() --> example 2

// step 1: body of the code
const res1 = players.map(player => {
    return {
        name: player.name,
        online: player.online,
    };
});
console.log(res1);

// step 2: destructurization
const res2 = players.map(({name, online}) => {
    return {
        name: name,
        online: online,
    };
});
console.log(res2);

// step 3: if the name of property = value of the property, the code can be shorter
const res3 = players.map(({name, online}) => {
    return {
        name,
        online,
    };
});
console.log(res3);

// step 4: hidden return
const res4 = players.map(({name, online}) => ({name, online})); // 6 lines = 1 line
console.log(res4);

// Example 3
// by using map() - is possible to change the array, and even the property value in the object in the array
console.table(players);
const updatedPlayers = players.map(player => ({
    ...player, // --> spread
    points: Math.round(player.points * 1.2), // helps to change all objects
}));

console.table(updatedPlayers);


// example 4
// code optimization + map(), which helps to find the object in the array and change the value of property inside this object 

// step 1:
const playerIdToUpdate = 'player-4';

const updatedPlayer = players.map(player => {
    console.log(player.id);
    if (playerIdToUpdate === player.id) {
        console.log('We found a player');
        return 'this is the new object';
    };
    return 'this is the old object';
});
console.table(updatedPlayer);

// step 2:
const updatedPlayer2 = players.map(player => {
    if (playerIdToUpdate === player.id) {
        console.log('We found a player');    
        return {
            ...player,
            timePlayed: player.timePlayed + 100,
        };
    };
});
console.table(updatedPlayer2);

// step 3:
const updatedPlayer3 = players.map(player => {
    return playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player // тернарник 
});
console.table(updatedPlayer3);

// step 4:
const updatedPlayer4 = players.map(player =>
    playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player // тернарник 
);
console.table(updatedPlayer4);


// if you make the copy of the object the code take the link to the same object
const obj = {
    a: 5,
    b: {
        c: 10,
        d: 20,
    },
};
const copy = {
    ...obj,
};
console.log(obj);
console.log(copy);

console.log(copy.b === obj.b); // --> true


