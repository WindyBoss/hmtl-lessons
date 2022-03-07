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
const showPlaylistInfo = function (userPlaylist) {
    console.log(userPlaylist);
}
showPlaylistInfo(playlist);

// If you want to call the function with an Object in parameter, 
// it is better to add the name of properties

// the bad version
const fn = function (params) {};

fn(10, 20, true, [], {}, 5); // --> very unreadable code

fn({
   age: 10,
   friends: 20,
   isOnline: true,
   hobbies: [],
   games: {},
   rating: 5, 
}) // --> this look much better

// The best way to create a function, that matches to the Objects with similar data
// Example function
const showPlaylistInfoSeparator = function (userPlaylist) {
    const {
        name,
        age,
        username,
        songsNumber,
        userEmail,
        songs,
        rating,
        stats: { 
            followers, 
            views, 
            likes, 
            comments: { bad, neutral, good },
        }
    } = userPlaylist;

    console.log(
        name,
        age,
        username,
        songsNumber,
        userEmail,
        songs,
        rating,
        followers, 
        views, 
        likes, 
        bad, 
        neutral, 
        good
    )
};
showPlaylistInfoSeparator(playlist);

// It can be easier - but it hard about the brackets
const showPlaylistInfoSeparator2 = function ({
        name,
        age,
        username,
        songsNumber,
        songs,
        rating,
        userEmail,
        stats: { 
            followers, 
            views, 
            likes, 
            comments: { bad, neutral, good },
    }}) { 
    console.log(
        name,
        age,
        username,
        songsNumber,
        userEmail,
        songs,
        rating,
        followers, 
        views, 
        likes, 
        bad, 
        neutral, 
        good
    )
};
showPlaylistInfoSeparator2(playlist);

// The way to show other properties
const showPlaylistInfoSeparator3 = function ({
    name,
    age,
    username,
    songsNumber,
    songs,
    rating,
    ...restProps
}) { 
console.log(restProps)
};

showPlaylistInfoSeparator3(playlist);