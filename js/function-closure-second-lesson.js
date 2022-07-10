// function closure (замыкание) - the function that creates other function
// This technique allows to receive an access to internal (local) variables, parameters and function inside one function,
// outside of this function.

const fnA = function (params) {
    const innerVariable = 'by calling function closure you can receive access to Internal Variable';

    const innerFunction = function () {
        console.log(params)
        console.log(innerVariable);
        console.log('call of InnerFunction');
    };
    return innerFunction;
}


const fnB = fnA(555);
fnB();

console.log(fnB);



// Other function of closure is a making code of function call easier and shorter

// Old version
const makeDishComplicated = function (ChiefName, dish) {
    console.log(`${ChiefName} is cooking ${dish}`);
}

makeDishComplicated('John', 'burger');
makeDishComplicated('Sam', 'sushi');
makeDishComplicated('Susan', 'tea');


// The new version
const makeChief = function (name) {
    const checkTheVariable = 123;
    const message = 'Never give up'

    const makeDish = function (dish) {
        console.log(checkTheVariable);  // ---> without this console log, browser does not see the variable
        console.log(`${name} is cooking ${dish}`);
        console.log(message);
    };

    return makeDish;
}

// to make an closure is necessary to create a variable (the name of Chief) 
const john = makeChief('John');

john('burger');
john('Steak');
console.dir(john);
// console.dir - helps to see the source of data in the main function (all variables), in condition of their using in function

const sam = makeChief('Sam');

sam('sushi');
sam('pasta');
console.dir(sam);

const susan = makeChief('Susan');

susan('tea');
susan('coffee');
console.dir(susan);




// One more example of easiness

// Rounding number
const floatingPoint = Math.random();
console.log(floatingPoint);

const someInt = Math.round(floatingPoint);
console.log(someInt);
const withDecimals = Number(floatingPoint.toFixed(2));
console.log(withDecimals);

// The code in one line
const floatingPointShortCode = Number(Math.random().toFixed(2));
console.log(floatingPointShortCode);

const someIntShortCode = Math.round(Math.random());
console.log(someIntShortCode);

console.log(Math.round(Math.random()));
console.log(Number(Math.random().toFixed(2)));


// Function of Rounder

// This is code without closure technique
const rounder = function (number, places) {
    return Number(number.toFixed(places));
}

console.log(rounder(Math.random(), 3));
console.log(rounder(Math.random(), 5));
console.log(rounder(Math.random(), 2));


// This is the code with closure technique
// It helps to close the function in variable in the quantity of numbers after comma.
const rounderB = function(places) {
    return function(number) {
        return Number(number.toFixed(places));
    }
}

const rounderFor0 = rounderB(0);
const rounderFor1 = rounderB(1);
const rounderFor2 = rounderB(2);
const rounderFor3 = rounderB(3);
const rounderFor4 = rounderB(4);
const rounderFor5 = rounderB(5);

console.log(rounderFor0(Math.random()));
console.log(rounderFor1(Math.random()));
console.log(rounderFor2(Math.random()));
console.log(rounderFor3(Math.random()));
console.log(rounderFor4(Math.random()));
console.log(rounderFor5(Math.random()));


// Function of data security
// Closure - helps to secure data (especially in public info libraries) from changes in code by other user

const myLib = {
    value: 123,
    add(num) {
        this.value += num;
    },
    getValue() {
        return this.value;
    }
}

console.log(myLib.getValue());
myLib.add(25);
console.log(myLib.getValue());
console.log(myLib);

myLib.value = 555;
console.log(myLib.getValue());
// After the code above property value will be changed, and if you do not want to give the possibility to change the code,
// it is better to use the next code and put the property inside the variable.

const myLibFactory = function () {
    let value = 123;

    const add = function(num) {
        value += num;
    };

    return {
        add,
        getValue() {
            return value;
        },
    };
};

const myLibi = myLibFactory();
console.log(myLibi);
// This code shows the variable 'value' in console of browser in 'Scopes' ---> 'closure'

//example with salary function
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    // salary - private variable
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return `Are you sick?`;
            }
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current(){
            return `Current salary of ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('John', 5000);
console.log(salaryManager.current());
console.dir(salaryManager.current);
console.log(salaryManager.raise(5000));
console.log(salaryManager.current());

// Our salary is hidden from the changes and can be seen only console.log and in "closure"