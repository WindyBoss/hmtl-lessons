const profile = {
    name: 'John Smith',
    age: 15,
    avatar: 'https://tse1.mm.bing.net/th?id=OIP.XGFHp3KiyNugDQZqmhs4rgHaE8&pid=Api&P=0&w=233&h=156',
    stats: {
        followers: 4352,
        views: 19032,
        likes: 10923,
    },
};

const makeProfileMarkup = function ({
    avatar,
    name,
    age = 35,
    location = 'USA',
    stats: { followers, views, likes },
}) {
    return `<div>
        <img src='${avatar}' alt='user avatar'>
        <p>${name}</p>
        <p>Age: ${age}</p>
        <ul><h2>Statistics</h2>
            <li>Followers: ${followers}</li>
            <li>Page Views: ${views}</li>
            <li>Likes: ${likes}</li>
        </ul>
    </div>`;
}

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup); // - the function, which helps to connect
// the return with HTML code




// Object.create() and hasOwnProperty

const animal = {
  legs: 4,  
};
const dog = Object.create(animal);
dog.name = "Mango";
  
console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
console.log(Object.keys(dog)); //[name]

// Object.create - creates a new Object and connects it to the Object in brackets, 
// but do not creates one object from 2

// Problem with 'For in' is about its nature to check also connected by Object.create objects, but do not check separately
// It is possible to check the it by using 'hasOwnProperty'

// ❌ Check all properties
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ check only this object properties
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

// It is good practice to add hasOwnProperty to the 'For In'
const book = {
    title: "Ostatnie królestwo",
    author: "Bernard Cornwell",
    genres: ["proza ​​historyczna", "przygody"],
    rating: 8.38,
};
  
  for (const key in book) {
    // If the object possesses the key make a cycle
    if (book.hasOwnProperty(key)) {
      console.log(key);
      console.log(book[key]);
    }
  }
