Pagination Rest Api

- fetch parametres
  - Page
  - Element quantity on page
- Pagination by 'Load More' button -Infinite Scroll
- [https://infinite-scroll.com/](https://infinite-scroll.com/);

Pagination - fetch of part of the backend data (You do not need all backend at the same time, but a
part of it, and if you need more, press button 'Load More')

- [https://gyazo.com/] -> app for saving screenshot
- [https://codepen.io/] -> code learning platform





"https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name";

? -> start of all parametres (limit, page, sort)
& -> the as 'and' 





// For making fetches, which limitation like number of page and so on it is better to use the next class 

-----------------------------
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});
-----------------------------

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"









---------------------------------------------
FOR HTTP TITLES CAN BE USED THE NEXT CODE  AS CONFIGURATION

A [CLASS]
const headers = new Headers({
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
});

headers.append("Content-Type", "text/bash");
headers.append("X-Custom-Header", "custom value");
headers.has("Content-Type"); // true
headers.get("Content-Type"); // "text/bash"
headers.set("Content-Type", "application/json");
headers.delete("X-Custom-Header");


OR

AN [OBJECT]
const headers = {
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
};


[EXAMPLE]
fetch("https://jsonplaceholder.typicode.com/users", {
  headers: {
    Accept: "application/json",
  },
}).then(response => {
  // ...
});