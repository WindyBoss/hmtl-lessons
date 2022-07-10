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

    stats: {
        likes: 10543,
        followers: 3540,
        views: 25205,

        comments: { 
            bad: 15, 
            neutral: 350, 
            good: 1432
        }
    },
    // function in the Object

    // old version of syntax of function in Object
    getName: function(name) {
        console.log('An old function gets names');
    },
    // The new one
    getNames() {
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

// Destruction helps to make from the properties --> variables

// the first version of destruction
// const { name, songsNumber, userEmail, songs, rating = 3, author, price = '50$', stats } = playlist;
// const { followers, views, likes } = stats;

// from the names of properties. You can put it in the combination, which you want
// it replace the next code

// the second version of destruction
const { 
    name, 
    songsNumber, 
    userEmail, 
    songs, 
    rating = 3, 
    author, 
    price = '50$', 
    stats: { 
        followers, 
        views, 
        likes,
        comments : { bad, neutral, good },     
    } 
} = playlist;


// If you use the code like that, it is not so readable, it looks like spaghetti
console.log(
    playlist.name,
    playlist.songsNumber,
    playlist.userEmail,
    playlist.songs,
    playlist.rating,
    playlist.stats.followers,
    playlist.stats.views,
    playlist.stats.likes,
    playlist.stats.comments.bad,
    playlist.stats.comments.neutral,
    playlist.stats.comments.good,
);

// the next one is better, than previous code
console.log(
    name, 
    songsNumber, 
    userEmail, 
    songs, 
    rating,
    followers,
    views,
    likes,
    bad,
    neutral,
    good,
);

songs.push('Boris Brejcha - The song');
console.log(
    name, 
    songsNumber, 
    userEmail, 
    songs, 
    rating,
    followers,
    views,
    likes,
    bad,
    neutral,
    good,
);

// if you will try to console the variable from playlist that do not match the property 
// it will show 'undefined', but if you will declare it in variables it will be shown
console.log(author);
console.log(price);

// If you try to change the variable-property - it will not be changed
console.log(rating);

// You can make 2 variables from one property in the same Object object and also you can name variables in different way
// than the name of the property by making next syntax


const { name: name1 } = playlist;
const { name: name2 } = playlist;
console.log(name1, name2);

const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;
  
  console.log(hotelName, stars, hotelStatus);


// Destruction of arrays

const rgb = [255, 100, 80];
const [a, b, c] = rgb;
console.log(a, b, c);

const [red, green, blue] = rgb;
console.log(red, green, blue);

// you can miss the the element from the Array
const [left, , right] = rgb;
console.log(left, right);


let first, second, third;
[ first, second, third ] = rgb;
console.log(first, second, third);


const [yellow, ...colors] = rgb;

console.log(`Red: ${red}, Colors: ${colors}`);

const numberOfBooksByWritter = {
    ThomasEdison: 5,
    MarkTwen: 10,
    CharlesDickens: 30,
    ThomasJeferson: 8,
};


// The way to find The biggest
const numberOfBooks = Object.values(numberOfBooksByWritter);
console.log(Math.max(...numberOfBooks));
console.log(Math.max(...Object.values(numberOfBooksByWritter)));

// Entries makes from properties and thier values - an array
const entries = Object.entries(numberOfBooksByWritter);
console.log(entries);
// It is similar to cycle 'for * of', but also makes an array of arrays
// For * of - makes singular array of each property and its value 

for (const entry of entries) {
    console.log(entry);
};


// The next 'for * of' - presents a strings of properties and their values
for (const entry of entries) {
    const name = entry [0];
    const numberOfBooks = entry [1];
    console.log(name, numberOfBooks);
};

// It can be simpler
for (const entry of entries) {
    const [name, numberOfBooks] = entry;
    console.log(name, numberOfBooks);
}

// Even more simpler
for (const [name, numberOfBooks] of entries) {
    console.log(name, numberOfBooks);
}

// Spread and destruction together by separating different properties of the object

const hotelOffer = {
    id: 'fd123jjjooiiaas',
    company: 'Airbnb',
    pricePerDay: 500,
// Object in Object 
    location: {
        city: 'Berlin',
        street: 'Bundesstrasse',
        buildingNumber: 23,
    },
    contact: {
        name: 'John',
        phone: '+48 794 540 165',
        email: 'john@example.com'
    }
}


// You can replace the couple of properties by using spread ..., but it must be at the end of brackets
const { company, pricePerDay, id } = hotelOffer;
const restProps = {
    city: hotelOffer.location.city,
    street: hotelOffer.location.street,
    buildingNumber: hotelOffer.location.street,
    name: hotelOffer.contact.name,
    phone: hotelOffer.contact.phone,
    email: hotelOffer.contact.email,
}
console.log(company, pricePerDay, id, restProps);

// The next code is similar to previous, but with a difference of being separate restProps for 2 objects
// const { company, pricePerDay, id, ...restProps } = hotelOffer;
// console.log(company, pricePerDay, id, restProps);
