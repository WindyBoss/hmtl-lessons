// Object - a complicated element, that usually contain the some different information about the object.
// For example about playlist or person, user and so on.

//Example

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

console.log(playlist);
// The way to take a singular element(property) from Object 

console.log(playlist.name);
console.log(playlist.songs);

// It is possible to add element to variable

const propertyName = 'userEmail';
console.log(playlist.propertyName); // --->  This way do not work, in console it will show "UNDERFINE"
//BUT ------------------->
console.log(playlist['userEmail']); // --->  will work
// OR -------------------------------->  
console.log(playlist[propertyName]); // --->  will work too

// The way to add or change the property to Object

playlist.dateOfAdding = '19/09/2020';
playlist.rating = 4.9;
console.log(playlist);

// Funtion in array checking
playlist.getName(5);
playlist.getNames(5);
playlist.changeName('Deep House');
playlist.addSong('Pascal Junior - Lost in Instanbul')
playlist.ratingUpdate('5');
console.log(playlist);
// Function of editing the Object

const fn = function (myObject) {
    console.log(myObject);
};

fn({ a: 1, b: 2});

// Objects have the same features as Arrays. There are no similar object, but by editing new variable, we can create a copy.

const a = {a: 2, b: 3};
const b = a;
console.log(a);
console.log(b);
console.log(a === b);

// BuT------------------------------>

const c = {a: 2, b: 3};
console.log(c);
console.log(a === c);
console.log({a: 1} === {a: 1});
// if you change something in Object a, the variable b will change also
a.c = 100;
a.hello = 150; // ---> firstly the code will add "hello: 150", 
b.hello = 200; // ---> but will change here for "hello: 200",
console.log(a);
console.log(b);

// Creation of Object Funtion

const rtfm = function () {
    return { a: 5};
}

console.log(rtfm());

//Arrays and funtions - are the Objects

//array
const g = [1, 2, 3];
g.hello = ';)';

console.log(g);

// function 
const fnt = function(){
    console.log('hello');
}

fnt.hello = ';)'; // ---> it will add the property to function
console.dir(fnt);
console.dir(fnt.hello);


// Variables as the name of property and as a value of this property

const inputColor = 'green';
const inputFeatureName = 'color';

const inputFeatures = {
    [inputFeatureName]: inputColor,
};
console.log(inputFeatures);


// Objects key and its value

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}


const keys = Object.keys(book);
for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book[key]);
}