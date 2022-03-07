// Plugin - already created code for specific goal, which can be adopted to your code, and is more popular as library
// Example: plugin of slider, scrolling and so on.

//The next code is created plugin of Counter

// Function, that will responsible for changes of value
const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
    onUpdate = () => null,
    } = {}) {
    this._value = initialValue; // low underline '_' - blocks the code, and other developers cannot change it
    this._step = step;
        // this code connect the id selector function to the constructor, which change the value
    this._refs = this._getRefs(rootSelector);
    this.onUpdate = onUpdate;
        // this code connect the event observer function to the constructor, which change the value
    this._bindEvents();
        // this code connect the value changer function to the constructor, which change the value
    this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    console.log(rootSelector);

    const refs = {};
    // by finding div firstly, we opimise the interpretator's work. It doesn't need to find the button in whole HTML,
    // but in already created and specific div
    refs.container = document.querySelector(rootSelector); // helps to find div in which our buttons are
    console.log(refs.container);


    refs.incrementBtn = refs.container.querySelector('[data-increment]'); // helps to find increment button in div
    refs.decrementBtn = refs.container.querySelector('[data-decrement]'); // helps to find decrement button in div
    refs.value = refs.container.querySelector('[data-value]'); // helps to find value number in div
    
    
    return refs; // return of the selection of the div
}

// the next function check the events that browser catched about behavior of the user
CounterPlugin.prototype._bindEvents = function () {
    if (this._refs.incrementBtn) { // if checks if such variable exists in prototype
        this._refs.incrementBtn.addEventListener('click', () => { // 'click' - is the action that browser catch from user activity
            console.log('CounterPlugin.prototype._bindEvents -> this', this);
            this.increment();
            this.updateValueUI();
        })
    }

        if (this._refs.decrementBtn) { // if checks if such variable exists in prototype
        this._refs.decrementBtn.addEventListener('click', () => {
            console.log('CounterPlugin.prototype._bindEvents -> this', this);
            this.decrement();
            this.updateValueUI();
        })
    }
}

// function that change the content of the text
CounterPlugin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value; // change the content of text in selector id
}

// function that will increase the value. It is saved in properties of the constructor
CounterPlugin.prototype.increment = function () { 
    this._value += this._step
}
// function that will decrease the value. It is saved in properties of the constructor
CounterPlugin.prototype.decrement = function () { 
    this._value -= this._step
}

const counter1 = new CounterPlugin({
    rootSelector: '#counter-1',
    step: 10,
    onUpdate: () => console.log('My custom callback for onUpdate'),
}); // # counter-1 - selector id from HTML
console.log(counter1);

const counter2 = new CounterPlugin({
    rootSelector: '#counter-2',
    step: 2,
    onUpdate: () => console.log('My custom callback for onUpdate'),
}); // # counter-2 - selector id from HTML
console.log(counter2);
