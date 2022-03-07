// if the Object possesses the function inside, 'this' in function will show the link to this object
const user = {
    tag: 'user',
    showTag() {
        console.log('ShowTag -> this', this);
    }
}
user.showTag();
// this --> user

// in the function is not an element of the object 'this' will show undefined if script possesses 'type=module' in HTML,
// or has strict mode, but if not this will show the object 'window' - which is the object in browser window
const emptyFunction = function () {
        console.log('ShowTag -> this', this);
    };

emptyFunction();
// this --> undefined -- no object

// you can add external function to the object by adding the link of this function into the property of the object and call it.
const showTagAgain = function () {
    console.log('ShowTagAgain --> this: ', this);
    console.log('ShowTagAgain --> tag of this: ', this.tag);
}

const userName = {
    tag: 'Cowboy',
}

userName.showUserTag = showTagAgain;

userName.showUserTag();
// this --> userName
// it is more important how you call the function than how it is written.


const user2 = {
    tag: 'Cowboy',
    againShowTag () {
        console.log('ShowTagAgain --> this: ', this);
        console.log('ShowTagAgain --> tag of this: ', this.tag);
    }
}

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// }
// this --> undefined -- no object
// invokeAction(user2.againShowTag); --> it will show undefined


const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this: ', this);
    };

    const sweater = {
        color: 'teal',
    };

    sweater.updateColor = changeColor;

    sweater.updateColor('red');
    //this --> sweater

    return sweater.updateColor;
}


const swapColor = makeChangeColor();
swapColor('blue'); 
// this -> undefined -- no object


// in the next code has a lot of links to the main function 'changeColorVersionTwo'
const makeChangeColorVersionTwo = function () {
    const changeColorVersionTwo = function (color) {
        console.log('Change Color -> This: ', this, 'New color: ', color);
        this.color = color;
    };
    return changeColorVersionTwo;
}

const updateColorVersionTwo = makeChangeColorVersionTwo();
// updateColorVersionTwo('yellow'); --> this = undefined

const hat = {
    color: 'blue',
    updateColorVersionTwo,
};

console.log(hat.updateColorVersionTwo);
hat.updateColorVersionTwo('orange'); // --> this = hat
console.log(hat);


const counterBi = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function(value, operation) {
    operation(value);
}

updateCounter(10, counterBi.increment.bind(counterBi));
updateCounter(10, counterBi.decrement.bind(counterBi));


// Increase and decrease button
const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};
console.log(counter);

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

incrementBtn.textContent = 'increase the number'; // code in HTML is an Object in java-script
decrementBtn.textContent = 'decrease the number'; // - the to change the content in HTML CODE

decrementBtn.addEventListener('click', function () {
    console.log('click on decrease');
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('click on increase');
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});

// unfortunately the content of function that is written as callback is not saved
// updateCounter(10, counter.increment); this -> undefined -- no object
// updateCounter(10, counter.decrement); this -> undefined -- no object

// There are couple of methods to connect the function to the object
// Method 'Call'

const showThis = function (...args) {
    console.log(args);
    console.log(' ShowThis --> this: ', this);
}

const objA = {
    a: 10, 
    b: 20, 
}

const objB = {
    c: 30, 
    d: 40,
}

showThis.call(objA, 30, 40); // ---> helps to call the function showThis with the object objA, 
// and this call is singular, and do not change the function

showThis.call(objB, 10, 20); // ---> 10 and 20 are the arguments of the function showThis and are written as (...args)

// Method apply is very similar to call, but with the difference that the arguments are given in array

showThis.apply(objA, [30, 40, 50, 60]);


const changeColorVersionThree = function (color) {
    console.log("changeColorVersionThree --> this: ", this);
    this.color = color;
}

const newHat = {
    color: 'teal',
}
changeColorVersionThree.call(newHat,'pink');
console.log(newHat);


const newSweater = {
    color: 'blue',
}

changeColorVersionThree.call(newSweater,'yellow');
console.log(newSweater);

// Method map()

//method map - helps to use the function to each element of the array, make some manipulation with them
// and push them into the new Array without any changes in original array
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths); // - show the length of each 'Planet' name


// flatMap method
// It is the same as map method, but if the array is presented as array of arrays, 
// the deepest arrays will be combined in one 

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
  // Change code below this line
  
  const genres = books.flatMap(book => book.genres);
  console.log(genres);


  const changeColorVersionFour = function (color) {
      console.log('changeColorVersionFour -> this: ', this);
      this.color = color;
      console.log(this);
  }

  const hatTwo = {
      color: 'black',
  };

  const sweaterTwo = {
      color: 'white',
  };

  const changeHatColor = changeColorVersionFour.bind(hatTwo);
  const changeSweaterColor = changeColorVersionFour.bind(sweaterTwo);
// Method bind --> connect the function callback with the specific Object forever, and is used with variable.  

  changeHatColor('green');
  changeSweaterColor('green');