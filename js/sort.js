/* 
Array.prototype.sort(callback(currentElement, nextElement),{})
- sort and change the original Array
- default using:
    + sort increment
    + complilate all elements by [unicode] and sort
    https:unicode-table.com/en/)
*/

const numbers = [1, 9, 6, 2, 3];
const numbersSortedInc = [...numbers].sort();

console.log(numbers);
console.log(numbersSortedInc);

const numbersSortedIncSecondOption = [...numbers].sort((currentElement, nextElement) => currentElement - nextElement);
console.log(numbersSortedIncSecondOption);
// if you want to sort numbers increasing in return you need to minus nextElement from currentElement

// <---------------------------------------------------------------------------------->

// decrement sorting
const numbersSortedDec = [...numbers].sort((currentElement, nextElement) => nextElement - currentElement);
console.log(numbersSortedDec);
// if you want to sort numbers decreasing in return you need to minus currentElement from nextElement

// or you can use alternative options
const numberSortReverse = [...numbers].sort().reverse(); 
console.log(numberSortReverse);
/* 
---> firstly it sort increasing, but than reverse, which also change the original
---> remember, that chaining (two or more operations) are more difficult for processor --> if a lot of data --> hard
*/

// if you want to measure the speed of code performance use next code
console.log(performance.now(numberSortReverse)); // shows the number of miliseconds per code
console.log(performance.now(numbersSortedDec));
// other ways to check the performance of the code --> developer.mozilla.org/en-US/docs/Web/API/Performance

console.log('<----------------------------------------------------------------->');

const letters = ['b', 'B', 'a', 'A'];
const lettersSortedABC = [...letters].sort();

console.log(letters);
console.log(lettersSortedABC);



// Sort in array of objects
const players = [
    { id: 'player-1', name: 'Mark', timePlayed: 420, points: 77, online: false },
    { id: 'player-2', name: 'Vitek', timePlayed: 100, points: 100, online: true },
    { id: 'player-3', name: 'Alex', timePlayed: 710, points: 27, online: false },
    { id: 'player-4', name: 'Marta', timePlayed: 320, points: 93, online: true },
    { id: 'player-5', name: 'Andrew', timePlayed: 250, points: 65, online: true },
];

// in sort of the objects it is possible to sort by the value of the specified property
const sortedByBestPlayersInc = [...players].sort((currentPlayer, nextPlayer) => currentPlayer.points - nextPlayer.points);
console.table(sortedByBestPlayersInc);

const sortedByBestPlayersDec = [...players].sort((currentPlayer, nextPlayer) => nextPlayer.points - currentPlayer.points);
console.table(sortedByBestPlayersDec);


// sorting by name Alphabetically

const sortedByName = [...players].sort((currentPlayer, nextPlayer) => {
    // console.log(currentPlayer.name[0]);
    // console.log(nextPlayer.name[0]);
    // console.log(currentPlayer.name[0] - nextPlayer.name[0]); --> shows NaN
    const result = currentPlayer.name[0] > nextPlayer.name[0]; // if you want of make reverse sorting change '>' on '<'

// if the unicode of the first letter of the first name is bigger 
// than the unicode of the second letter of the second name --> return 1
    if (result) {
        return 1;
    }

    // if smaller --> return -1 -----> all sorting is based on unicode of the symbols 
    if (!result) {
        return -1;
    }
});
console.table(sortedByName);

// the way to check unicode 
console.log('abc'.charCodeAt(0))
console.log('abc'.charCodeAt(1))
console.log('abc'.charCodeAt(2))