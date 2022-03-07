/*
innerHTML

- read the code
- change it -> it gives the possibility to write the code directly without any append, prepend and other instruments
It is good tool for clearing, but do not use for adding something like <--...innerHTML += "..." --> 
because it firstly clear the old textContent and after that write it again and add the new one. 

*/

const titleEl = document.querySelector('.title');
console.log(titleEl.textContent); // - show the content of the text --> 'This is Title'
console.log(titleEl.innerHTML); // - show the whole code between --> 'This is <span>Title</span>'

titleEl.innerHTML = 'blablabla'; // - re-write the code 'This is <span>Title</span>' -> 'blablabla'

titleEl.innerHTML = '<a href="">This is a link</a>'; 



/*
inserting the code by using insertAdjacentHTML()

There are four types of insertAdjacentHTML:
- beforebegin --> before the parent element
- afterbegin --> as a first element in the parent element 
- beforeend --> as the last element in the parent element
- afterend --> after the parent element
*/

titleEl.insertAdjacentHTML(
    'beforebegin', 
    '<a href="">javascript</a>'
);
titleEl.insertAdjacentHTML(
    'afterbegin', 
    '<a href="">javascript</a>'
);
titleEl.insertAdjacentHTML(
    'beforeend', 
    '<a href="">javascript</a>'
);
titleEl.insertAdjacentHTML(
    'afterend', 
    '<a href="">javascript</a>'
);