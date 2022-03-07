// Function callback is the process of calling one function inside other as being a parameter

const fnA = function(number) {
    console.log(number);
    return number;
}

const fnB = function(callback) {

    callback(100);

}

fnB(fnA);
//function B - shows results of function A



// Such approach helps to re-use the main function

const doMath = function(a, b, callback) {
    const result = callback(a, b)
    console.log(result);
    return console.log(`${a} <-> ${b} = ${result}`);
}

const add = function(x, y) {
    return x + y;
}

const sub = function(x, y) {
    return x - y;
}

doMath(5, 3, add);
doMath(5, 3, sub);

// function doMath can be used with different functions

// <-----------------------But it can be simplier------------------------------->

doMath(5, 3, function(x, y) {
    return x + y;
});
doMath(5, 3, function(x, y) {
    return x - y;
});


// how to connect to the code to the HTML document


// the next code connect the function to the button. When user clicks on button, function console 'button clicked'
// and adds the Date and time to miliseconds

const buttonRef = document.querySelector('button');
const handleBtnClick = function() {
    console.log('button clicked at ' + Date.now());
}

// Date.now - shows the present time to miliseconds
// addEventListener - function, which observes the event and do (function, which is connected) when this 'Event' happened  
// The code of addEventListener:

// function addEventListener (eventType, callback) {
//     if(eventType === event) {
//         callback();
//     }
// }

buttonRef.addEventListener('click', handleBtnClick);

// The code can be simplier

buttonRef.addEventListener('click', function() {
    console.log('button clicked at ' + Date.now());
});

// Good website: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API


// Geolocation_API code

const onGetPositionSuccess = function(position) {
    console.log(`The location of the user`);
    console.log(position);
};

const onGetPositionError = function(error) {
    console.log(`The user has denied the location`);
    console.log(error);
};

// The next code asks the user of geolocation. This function cannot present the result, but can cause the function
// if the user gave the location (success) and different function, when has denied
// These 2 function are written higher

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

// The instrucion how the change the local port
// Settings (CTRL + ,) --> find {live server port} --> settings.json --> change the "liveServer.settings.port"


// Asynchron code callback function

const callback = function (){
    console.log('Show this line after 2 seconds')
};

console.log('The code before setTimeout');

//Function setTimeout - it JS integrated function, which helps to use function after some break (2000 miliseconds in exmple)
setTimeout(callback, 2000);

console.log('The code after setTimeout');


// Backend callback

const onRequestSuccess = function (response) {
    console.log('Function callback after successful response from server');
    console.log(response);
}

// fetch - function, which helps to work with backend data, which take a link to the server
// then - function, which helps to work with backend data, which possess the instruction, what to do with data from server
fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(onRequestSuccess);






// Multitasked function-filter-cycle
const filter = function (array, test, limit) {
    const filteredArray = [];
    
    // checks all elements of array
    for (const element of array) {
        // console.log(element);
        // console.log(test(element));

        // the result of boolean (true or false) from the condition function callback
        const passed = test(element, limit);

        // if boolean = true (passed) / else if false the code will be (!passed)
        if (passed) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

// Function condition (value more or equal variable 'limit'), which return boolean (true or false)
const callback1 = function(value, limit) {
    return value >= limit;
}

const callback2 = function(value, limit) {
    return value < limit;
}

// the filter has return all 
console.log(filter([1, 2, 3, 4, 5], callback1, 4));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2, 5)); 


// The next code is inline code of the callback function
console.log(filter([1, 2, 3, 4, 5], function(value, limit) {
    return value >= limit;
}, 4));

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function(value, limit) {
    return value < limit;
}, 5)); 


// Multitasked function with Object in array

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'strawberries', quantity: 300, isFresh: false },
    { name: 'plums', quantity: 50, isFresh: false },
    { name: 'pineapples', quantity: 190, isFresh: true },
    { name: 'pemigranate', quantity: 150, isFresh: true },
];


// the next code cooperate with the filter function, which was created to filter the array of number.
// This function also can work with array of Objects and filter them by the values of properties.
const getFruitByQuantity = function (fruit, quantity) {
    return fruit.quantity >= quantity && fruit.isFresh === true;
}

console.log(filter(fruits, getFruitByQuantity, 160));