/* 
Navigation in DOM
https://goit.global/javascript/ua/v1/module-07/dom-traversal.html  --> read this 
There is the way of connection the elements of HTML code in the JS. For example you want to take all elements inside 
the 'Parent element' or all 'Childs', 'neighbors', you can use this syntax 
*/

const navEl = document.querySelector('.site-nav');

const firstNavItemEl = navEl.firstElementChild;
// -> firstElementChild - helps to select the first element in parent HTML object
console.log(firstNavItemEl);

// The nexy one is the same, but longer code

const firstNavItemElSecondWay = navEl.querySelector('.site-nav_item');
console.log(firstNavItemElSecondWay);

console.log(navEl.children);
// --> children helps to select all elements inside the Parent HTML object and put it into the array
console.log(navEl.lastElementChild); 
// -> lastElementChild - helps to select the last element in parent HTML object
console.log(navEl.children[1]);
