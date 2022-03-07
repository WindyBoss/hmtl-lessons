
const username = 'Vitaliy';
const age = 23;
const playlist = {
    name: 'Chill',
    songsNumber: 4,
    userEmail: 'zhyryk1997@gmail.com',
    songs: ['Montez - AUF', 'Pronto - Priceless', 'Maroon 5 - Cold Remix', 'Hippie Sabotage - Devil Eyes'],
    rating: 5,
    // username: 'username', the same as username, ---> if the property in Object has the same name as its definition
    // it can be written as in lines below, but the code use the variables, that were defined before Object
    username,
    age,


    // function in the Object

    // old version of syntax of function in Object
    getName: function(name) {
        console.log('An old function gets names');
    },
    // The new one
    getNames(name) {
        console.log('The new syntax of function gets names');
    }, 

    // If you want to use the Object property in the function, instead of using Object name, use this.

    changeName(newName) {
        this.name = newName;
        console.log(`This is the new name - ${newName}`);
    },

 addSong (newSong) {
        this.songs.push(newSong);
        console.log(`This is the new track - ${newSong}`);
        this.songsNumber = this.songs.length;
    },

    ratingUpdate (newRating) {
        this.rating = newRating;
        console.log(`This is the new rating - ${newRating}`);
    }
};

// Object.keys(Object-name).length ---> helps to check the number of properties in Object
console.log(Object.keys(playlist).length);



// SPREAD 
// ... - the syntax of spread

// example 1
const numbers = [...[1, 2, 3], 4, 5];
console.log(numbers);

// example 2
const numberC = [1000, ...numbers, 5000, ...numbers];
console.log(numberC);

// example 3
const temps = [18, 14, 12, 21, 17, 29, 24, 39, 5];
console.log(Math.max(...temps));
console.log(Math.min(...temps));
console.log(Math.max(temps)); // ---> will show NaN

// example 4

const a = [1, 2, 3];
const b = [...a];
console.log(a);
console.log(b);
console.log(a === b); // - will show false, because the difference of links


// example 5
const c = [ { a: 1 }, { b: 2 }, { c: 3 } ];
const d = [...c];

console.log(c);
console.log(d);

console.log(c[0] === d[0]); // shows true
console.log(c === d); // shows false

// example 6
const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
console.log(allTemps);

// example 7 and Object.assign()
// Object.assign --> is used instead of spread function ...
const e = { x: 1, y: 2};
const f = { x: 0, z: 3};

// first version
const g = Object.assign({}, e, f); // --> the first one must be empty Object
console.log(g);

// second version
const h = {};
Object.assign(h, e, f);
console.log(h);

//third version
const j = {
    ...e,
    ...f,
};
console.log(j);

// example 8
console.log(...'Vitaliy Zhyryk');




// Where spread can be used ?

// 1. for replacement of an old settings to a new one

const defaultSettings = {
    theme: 'light',
    showNotifications: false,
    hideSidebar: true,
}
console.log(defaultSettings);

const userSettings = {
    theme: 'dark',
    showNotifications: true,
}
console.log(userSettings);

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
}

console.log(finalSettings);

// spread of arrays can be used in combination with slice
// Example 1
const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

// example 2

const updatedHouses = [
  ...houses.slice(0, 1),
  'Frey of the Crossing',
  ...houses.slice(2),
];
// YOu can create a new array, but not change an old one with spread
console.log(updatedHouses);




// Object cycle 'For In'
// It is not possible to check all properties of the object
// by using 'for' or 'for of' - but is possibile by using 'for in', which do not work with Arrays

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
  }

  console.log(`Property ${keys} - value: ${values}`);
  console.log(Object.keys(apartment)); // makes the same as for in + keys.push
  console.log(Object.values(apartment)); // makes the same as for in + values.push
  console.log(Object.entries(apartment)); // makes from each property + value - separate array, 


  // example of combination of Object.keys + for of
  const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  const hotelKeys = Object.keys(hotel); // ["name", "stars", "capacity"]
  for (const key of hotelKeys) {
    console.log('Value: ', hotel[key]);
  }


  // Example of combination of Object.entries + for of
  const entries = Object.entries(hotel);

    for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);
    }


  // Operator delete
  // If it is necessary to delete a property it is necessary to use 'delete' operator
  console.log(apartment);
  delete apartment.price;
  console.log(apartment);




  // It is possible to use function or variable to name the property of the object
const key = 'person';
const getKey = function () {
  return 'age';
};

const object = {
  [key]: 'Mango',
  [getKey()]: 2,
};

console.log(object);

// You can add and delete function from the object as normal property




// Array of arguments
const add = function (...args) {
    console.log(args); // масив всіх аргументів
  };
  
  add(1, 2, 3);
  add(1, 2, 3, 4, 5);