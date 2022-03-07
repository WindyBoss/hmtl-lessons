// arrow function

const add2 = (x, y, z) => {
    console.log(x, y, z);
    return x + y + z;
}

// Normal function
const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}

console.log(add(5, 7, 2));
console.log(add2(5, 7, 2));

// Rules:
// 1. You can miss the parameter brackets, but if the paratemers are more than 2 it is better to use the brackets

const add3 = a => {
    console.log(a);
    return a;
}

console.log(add3(5));

// 2. If parameters are missed it must be empty brackets

const add4 = () => {
    console.log(`I do not know`);
}
add4();

// 3. It can be written easier
// before
const add5 = function (a, b, c) {
    return a + b + c;
}

//after
const add6 = (w, e, r) => w + e + r; // --> you can miss return, if you need only return
console.log(add6(6, 5, 4));

// 4. arrow function do not have variable 'arguments'

const add7 = function (a, b, c) {
    console.log(arguments);
    console.log(a, b, c);
    return a + b + c;
}

console.log(add7(5, 5, 6));
//and
const add8 = (a, b, c) => {
    // console.log(arguments);
    return a + b + c;
}

console.log(add8(5, 5, 6));

// The way to receive all arguments in arrow functions is to

const add9 = (...args) => {
    console.log(args);
    return args;
}

console.log(add9(5, 5, 6));

// 5. If you want to return an Object from the arrow function it is necessary to use bracket with object like in example below.

const add10 = () => ({arrow: 25}); // without the brackets function will see an object as the body of function
const add11 = () => {arrow: 25}; // without the brackets function will see an object as the body of function
console.log(add10());
console.log(add11());