/*
There are two steps in the process of creating HTML elements

1. Create HTML in the memory without pushing it to the HTML code --> tool: .createElement('...')
2. Pushing them to the DOM --> tools: 
    1) appendChild: in the end of the element (only one)
    2) prependChild:  in the beginning of the element (only one)
    3) insertBefore: before the element 
    4) nextSibling: near sibling
    5) append: in the end of the element (multiple)
    6) prepend: in the beginning of the element (multiple)
    ...

it is better to minimize connection JS with DOM, 
so it is better to create all necessary elements inside one and push it together
*/
const magicBtn = document.querySelector('.make-a-magic');

const titleEl = document.createElement('h1');
const titleInput = document.createElement('input');
titleEl.classList.add('page-title');
titleInput.classList.add('title-input');

// console.log(document.body);

/*
document.body.appendChild(titleEl);
document.body.appendChild(titleInput);
Pushing elements separately
*/
magicBtn.addEventListener('click', () => {
    titleEl.textContent = titleInput.value;
});


// creation of image
const imageEl = document.createElement('img');
imageEl.classList.add('page-image');
imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountain-glacier';
imageEl.width = 600;
// document.body.appendChild(imageEl); --> pushing image separately

// The next code will push title, input and image together 
const heroEl = document.createElement('div');
heroEl.classList.add('hero');
heroEl.append(titleEl, titleInput, imageEl);

document.body.appendChild(heroEl);

// creation of the navigation element (by pushing couple of elements together (grape way))

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav_item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav_link');
navLinkEl.textContent = 'Personal account';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl); // --> pushing <a> to the <li>
const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, null); // --> pushing <li> to the <ul> in the end

// navEl.insertBefore(navItemEl, navEl.firstElementChild); // --> pushing <li> to the <ul> in the beginning

// navEl.insertBefore(navItemEl, navEl.children[2]); // --> pushing <li> to the <ul> before 3 element

navEl.insertBefore(navItemEl, navEl.lastElementChild); // --> pushing <li> to the <ul> before last element