// Construct function

const Car = function (brand, model, price) {
    console.log(this);
    // this is called in context of the exact object and this --> the link for that object
    this.brand = brand;
    this.model = model;
    this.price = price;


    this.changePrice = function (newPrice) { // this function will be a property of the constructor 
        this.price = newPrice;               // and will take more browser memory
    };
}; // -- function - constructor of an example of future prototype

const myCar = new Car('Audi', 'Q3', 35000); // method new helps to call the constructor in context of the exact object
// the new creates an empty object
console.log(myCar);
myCar.changePrice(55000); // use of the function 'changePrice'
console.log(myCar);

// The better version
const NewCar = function (config = {}) { // without destructuring. Always add '={}' because 
    // if the function will be called with empty brackets, then browser will show the mistake
    this.brand = config.model;
    this.model = config.model;
    this.price = config.price;
};

const newCar = new NewCar({
    brand: 'BMW',
    model: 'X5',
    price: 45000
});
console.log(newCar);


const OneMoreNewCar = function ({ brand, model, price } = {}) { // the code with destructuring
    // this is called in context of the exact object and this --> the link for that object
    this.brand = brand;
    this.model = model;
    this.price = price;
};
console.log(OneMoreNewCar.prototype); // - shows the panel of all prototypes


// It is better to write all function and method into the prototype, because all objects and proto functions 
//will receaive an access to the same prototype function 
OneMoreNewCar.prototype.showTheParameters = function () {
    console.log(`${this.brand} - ${this.model}  - ${this.price}`);
}

OneMoreNewCar.prototype.changePrice = function (newPrice) { 
    this.price = newPrice;               
};

const OneMoreCar = new OneMoreNewCar({
    brand: 'Bugatti',
    model: 'Divo',
    price: 1355000,
});
console.log(OneMoreCar);
OneMoreCar.showTheParameters(); // the result: Bugatti - Divo - 1355000

const OneMoreCar2 = new OneMoreNewCar({
    brand: 'Koenigsegg',
    model: 'Agera RS',
    price: 1455000,
});
console.log(OneMoreCar2);
OneMoreCar2.showTheParameters(); // the result: Koenigsegg - Agera RS - 1455000
OneMoreCar2.changePrice(1500000); // the function will change value of the property in the constructor
OneMoreCar2.showTheParameters(); // the result: Koenigsegg - Agera RS - 1500000


// <------------------------------------------ Other Example ----------------------------------------->
const User = function ({name, email, password } = {}) {
    this.name = name;
    this.email = email;
    this.password = password;
    console.log(`${this.name} - ${this.email}: ${this.password}`)
}

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
}

User.prototype.changePassword = function (newPassword) {
    this.password = newPassword;
}

User.prototype.changeName = function (newName) {
    this.name = newName;
}

const mango = new User({
    name: 'Mango',
    email: 'mango@gmail.com',
    password: 1111,
});
console.log(mango);

mango.changeEmail('mango@context.ua');
mango.changePassword(21012015);
mango.changeName('apple');
console.log(mango);



// More theory

const objA = {
    x: 5,
};

console.log(objA.__proto__ === Object.prototype); // it will return true
// Also this shows that when the constructor creates a new object, the function is written to __proto__

// this = Object.create(User.prototype); 


// Constructor rules

// 1. All objects possess __proto__ 
// 2. In __proto__ is a link on its prototype - other object with properties (function and so on)
// 3. Durion Object.creates in __proto__ is written a link on this object or function
// 4. function - constructor is just a function
// 5. The main magician is operator (method) 'New'
// 6. New - creates a new object
// 7. The function is called in context of this object
// 8. In property this.__proto__ is written a link to this function.prototype
// 9. The link for the object is returned in the place of call the 'New'
// 10. arrow function cannot be a constructor
// 11. [[call]] - traditional method of calling function. but [[constructor]] - method of calling function as a constructor


// Static Properties
// The JS, which is written inside the constructor, but not in __proto__ or __proto__.constructor are static
// example:

User.message = 'I am static property, I do not exist in prototypes or constructor';

User.logInfo = function (obj) {
    console.log(obj);
    console.log(this); // this - cannot be used properly in static properties, 
    // because this is not used in context of the object. It will return the function, but the next will work
    console.log('Email:', obj.email);
    console.log('Password:', obj.password);
}

User.logInfo(mango);
console.log(mango);
console.dir(mango);

console.log(Math.round(5.9));
console.log(Math.PI);
console.log(Object.keys(OneMoreCar2), ' - ', Object.values(OneMoreCar2));

// all of these properties are static