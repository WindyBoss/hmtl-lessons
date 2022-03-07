//example 
const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    }
      return onSuccess(pizzaName)},
  };
  // Change code above this line
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  // Method calls with callbacks
  pizzaPalace.order("Smoked", makePizza, onOrderError);
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  pizzaPalace.order("Big Mike", makePizza, onOrderError);
  pizzaPalace.order("Vienna", makePizza, onOrderError);
  // If you want to check something that is included in array use '.includes()'


//  example 2
// forEach - function, which replace for of and for

  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    
    // the next code helps to check all elements of array (orderedItems) and make a sum of these elements
    orderedItems.forEach(function(orderedItem) {
      totalPrice += orderedItem;
      console.log(orderedItem);
    });
    
    console.log(totalPrice);
    return totalPrice;
  }

  calculateTotalPrice([6, 5, 4]);

// forEach example 2
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
  
  numbers.forEach(function(number) { // --> do not dublicate the 'value' in this brackets
    //   console.log (number);
  if (number > value) {

    //   console.log(number);
    filteredNumbers.push(number);
  } 
});
console.log(filteredNumbers);
return filteredNumbers;
};

filterArray([6, 5, 4], 5.5);
filterArray([12, 24, 8, 41, 76], 38);




// forEach example 3
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];

    // if you want to check two arrays, use forEach on the first one
    firstArray.forEach(function(element) {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });
  
    console.log(commonElements);
    return commonElements;
};

  getCommonElements([12, 24, 8, 41, 76], [12, 25, 10, 41, 76]);



//   function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }



// The next code is the arrow version of the function before

  const calculateTotalPriceX2 = (orderedItems) => {
    let totalPrice = 0;
 
   orderedItems.forEach((item) => {
     totalPrice += item;
   });
 
  return totalPrice;
 }



 const changeEven = (numbers, value) => {
    const newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
        // console.log(numbers[i]);
      if (numbers[i] % 2 === 0) {
        newArray.push(numbers[i] + value);
      } else {
        newArray.push(numbers[i]); 
      }
    }
    console.log(newArray);
    return newArray;
  }

  changeEven([21,10,10,8,5,13,13], 7 );

  // Method map practice
  // Change code below this line
const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];
  
  const getUserNames = users => users.map(user => user.name);  
  console.log(users.map(user => user.name));
// The next code returns the array of users with 'color' of eyes
const getUsersWithEyeColor = (users, color) => { 
    return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'brown'));


 // The next code returns the array of users with age between minAge and maxAge
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age > minAge && user.age < maxAge);      
};
console.log(getUsersWithAge(users, 30, 35));


// The next code returns the array of users with friend name
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName)); 
  };
console.log(getUsersWithFriend(users, 'Briana Decker'));
// The next code returns the array of all users friends without repeating
const getFriends = (users) => {
    return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
 };
 console.log(getFriends(users));

// Method filter --> returns the array of all active users
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive)
 };
 console.log(getActiveUsers(users));

// Method filter --> returns the array of all inactive users
const getInactiveUsers = (users) => {
    return users.filter(user => !user.isActive)
 };

 // Method find() --> find the first element which possess the value in the callback function
const getUserWithEmail = (users, email) => {
    return users.find((user) => user.email === email) 
  };
  console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

  // Method every() --> checks are all users active
const isEveryUserActive = (users) => {
    return users.every((user) => user.isActive); 
  };

  console.log(isEveryUserActive(users));
// Method some() --> checks is any user active
const isAnyUserActive = users => {
    return users.some(user => user.isActive);
};
console.log(isAnyUserActive(users));


// method reduce () helps to calculate total balance of all objects in the array
const calculateTotalBalance = users => users.reduce((total, user) => {
    return total + user.balance;    
    }, 0);
    console.log(calculateTotalBalance(users));

// method reduce() calculate the number of all friends those are possessed by users 
const getTotalFriendCount = users => users.reduce((total, user) => {
    return total + user.friends.length;  
},0);

    // One more example
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => 
  number % 2 === 0)
const oddNumbers = numbers.filter(number => 
  number % 2 === 1);

  console.log(evenNumbers);
  console.log(oddNumbers);


// One more example
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
// Method flatMap --> is the same as method map, it can combine also arrays in deep. For example method map can create
// array of arrays, but flat map will split array of arrays on simple array with all elements of these arrays.
// The main thing is that if the element is in couple of arrays in one array it will be repeated
const allGenres = books.flatMap(book => book.genres);
  // Method filter --> in this example this method filters the array from flatMap by deleting repeated elements,
  // and making on of them
const uniqueGenres = allGenres.filter((genre, index, array) => {
    array.indexOf(genre) === index;
    console.log(array.indexOf(genre));
    console.log(array);
    console.log(genre);
}); 
      
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
      
const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);

    
// Method find() - return the first object or array in which were founded value 
const BOOK_TITLE = 'The Dream of a Ridiculous Man';

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);

// Method sort + method localeCompare
// next code sort books by the name of author alfabetically
const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// next code sort books by the name of author !alfabetically
const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// next code sort books by the RATING asceding
const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// next code sort books by the RATING desceding
const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
// Method every - check all elements in array and if all elements match to filter, it return true, if not false

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 === 1);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 === 1);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 === 1);

// Method some() ---> opposite to every  --> check is any of the elements has the feature,
// that are presented is callback function and returns boolean

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 === 1);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 === 1);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 === 1);

// Method reduce() --> check all elements in the array and make a callback operation on every of them
const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
const playtimes = players.map(player => player.playtime);
console.log(playtimes);

const totalPlayTime = playtimes.reduce((previousValue, number) => {
    return previousValue + number;
}, 0);
console.log(totalPlayTime); 

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);  


// Method reduce ==> calculate average time spended per one game by player
const totalAveragePlaytimePerGame = players.reduce((total, player) => {
    return total + player.playtime / player.gamesPlayed;
  }, 0);
  console.log(totalAveragePlaytimePerGame);


// Method sort() - is a different in comparison with other methods in this list, 
// because of its feature to change the original source of information (array), and if you want to manipulate this array, 
// you need to make a copy before that by spreading the array 
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

// sort of numbers
// if you want to sort asceding you should put the next code and see if a > b
const ascendingReleaseDatesTypeTwo = [...releaseDates].sort((a, b) => a - b);
// if you want to sort desceding you should put the next code and see if b > a
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// sort by letters
// if you want to sort by algabetic, it is necessary to use method localeCompare after method sort, like in next code
// a.localeCompare(b)
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// if you want to sort by algabetic reverse, it is necessary to use method localeCompare after method sort, like in next code
// b.localeCompare(a)
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// Launch of methods
const otherBooks = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    }
    ];

const MIN_BOOK_RATING = 8;

// If you want to make more clear code, it is necessary to make a launch of methods (not more than 3),
// but remember, that other next method use the RESULT of previous method
const names = [...otherBooks].filter(book => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
.sort((firstOtherBook, secondOtherBook) => firstOtherBook.localeCompare(secondOtherBook));

console.log(names);


const getTotalBalanceByGender = (users, gender) => {
	let totalSexBalance = users.filter((user) => user.gender === gender)
    .reduce((previousValue, user) => previousValue + user.balance,0);
return totalSexBalance;
};
console.log(getTotalBalanceByGender(users, 'female'));
