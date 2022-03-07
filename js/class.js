// class -->  the same as constructor, but with different syntax, and simplier.

// Example of the constructor function

const Car = function ({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}

Car.description = 'Car description' //`Brand: ${this.brand} - Model: ${this.model} --> price: ${this.price}`; --> this does not work

Car.logInfo = function () {
    console.log(this.description);
}

const car = new Car({
    brand: 'Mercedes',
    model: 'S63',
    price: '100000$',
});

console.log(car);


// Class remake

class Car1 {

    // all static properties are declared before constructor
    static concern = 'Volkswagen';

    static carInfoLog({ brand, model, price } = {}) {
        console.log(`Brand: ${brand} - Model: ${model} --> price: ${price}`);
    }
    #owner = 'Vitaliy';  // Private property because of #. It cannot be used in the constructor.
    // Classes and # are new instruments in JS code, and they are not accepted in standard JS code.
    // You will need JS complator for remaking your JS into the older versions of JavaScript.


    myPublicProperty = 'Year of production - 2021'; // declaration of public property, that CANNOT be saved in prototype


    // constructor () {} - a new syntax of class. It is similar to the const Car = function () {}
    constructor({ brand, model, price } = {}) {
        console.log('Contructor Performance');
        console.log(this); // - class this is called in the context of 'carInstance'. 
        // This console.log will show all properties of the object
        
        this.brand = brand;
        this.model = model;
        this.price = price;

        console.log(this.#owner); // this console.log() - shows the private property, but which was declared before constructor
        console.log(this.myPublicProperty); // - console of public property
    }

    changePriceInClass(newPrice) { // it's saved in __proto__ of the class
        this.price = newPrice;
        console.log(`The price has been changed to ${newPrice}`);
    }

    updateModel(newModel) {
        this.model = newModel;
    }

    changeBrand = (newBrand) => { // arrow function is a public property, and cannot be saved in prototype
        this.brand = newBrand;
    }

}
console.dir(Car1);
console.log(Car1.concern);

const carInstance = new Car1({
    brand: 'Mercedes',
    model: 'S63',
    price: '100000$',
});
console.log(carInstance);
Car1.carInfoLog(carInstance); // call of the static function 
// (only after declaring of the object, and the object must be in brackets of the function)

console.log(Object.getPrototypeOf(carInstance)); // --> it shows the prototype of the object 
console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);  // - shows true

console.log(carInstance.owner); // - it will show undefined
// console.log(carInstance.#owner);  --> it will show mistake
// Read more at https://habr.com/ru/post/438202/



class Car2 {
    constructor({ brand, model, price } = {}) {
        
        this.brand = brand;
        this.model = model;
        this.price = price;

    }

    // instead of calling the functions for changing the value of the any property, it is better to connect
    // the property directly to the variables by using 'get' and 'set'

    // the name of get or set must be the same as the variable. 
    // Additionally, set and get must go together.
    get price() {
        return this._price; // the name of the property is 'this' must be different from the declared in constructor
        // and from the name of get or set
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

const newCarInstance = new Car2({
    brand: 'BMW',
    model: 'X5',
    price: 50000,
});

console.log(newCarInstance);
console.log(newCarInstance.price); // --> call of 'get'
newCarInstance.price = 55000; // --> the use case of 'set' 
console.log(newCarInstance.price); 
console.log(newCarInstance);


// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty