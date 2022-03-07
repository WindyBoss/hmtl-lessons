import '../css/common.css';

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscult',
];

let raceCounter = 0

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
    const promises = horses.map(horse => run(horse));

    updateWinnerField('');
    updateProgressField('🏇 The ride is started.');
    determineWinnner(promises)
    waitForAll(promises);
}

function determineWinnner(horsePromises) {
    raceCounter += 1;
    Promise.race(horsePromises).then(({ horse, time}) => {
        updateWinnerField(`🙌 The winner is ${horse}, finished for ${time / 1000} sec`)
        updateResultTable({ horse, time, raceCounter })
    });
}

function waitForAll(horsePromises) {
    Promise.all(horsePromises).then(() => {
        updateProgressField(`🍺 The ride is finished`);
    });
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
};

function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 4000);

        setTimeout(() => {
            resolve({ horse, time });
        }, time)
    });
};

function updateResultTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}










run('Mango').then(x => console.log(x));

/*
* There are methods for servicing of array of promises
* Promise.race() => method, that stops servicing array of promises after the first promise is finished
* Promise.all() => method, that stops servicing array after all promises are finished
*/

/*
const promises = horses.map(horse => run(horse));

Promise.race(promises).then(({ horse, time }) => {
    console.log(
        `%c The winner is ${horse}, finished for ${time / 1000} sec`,
        `color: green; font-size: 14px`
    );
});

Promise.all(promises).then(() => {
    console.log(
        `%c The ride is finished`,
        `color: blue; font-size: 14px`
    );
});
*/