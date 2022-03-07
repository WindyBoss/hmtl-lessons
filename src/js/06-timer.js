import '../css/common.css';

refs = {
    startBtn: document.querySelector('[data-action-start]'),
    stopBtn: document.querySelector('[data-action-stop]'),
    interface: document.querySelector('.js-clockface'),
};

console.log(refs);

class Timer {
    constructor({onTick}) {
        this.isActive = false; // -> this isActive helps to secure against multiple timer starts
        this.intervalId = null;
        this.onTick = onTick;

        this.init();
    };

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    };

    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            updateClockFace(this.getTimeComponents(currentTime - startTime));
            this.onTick(this.getTimeComponents(currentTime - startTime));
        }, 1000);
    };
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    };

    pad(value) {
        return String(value).padStart(2, '0');
    };

    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { hours, mins, secs };
    };
};

const timer = new Timer({ onTick: updateClockFace } )

refs.startBtn.addEventListener('click', timer.start.bind(timer)); // -> .bind -> connect plugin with DOM
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));


// function which change the text Content of text
function updateClockFace({ hours, mins, secs }) {
    refs.interface.textContent = `${hours}:${mins}:${secs}`;
};
// Function that makes time format from 5.13.4 -> 05.13.04


/*
const timer = {
    intervalId: null,
    isActive: false, // -> this isActive helps to secure against multiple timer starts 
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timeComponents = getTimeComponents(deltaTime);
            unpdateClockFace(timeComponents);
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
};
*/