/*
classlist (used for manipulation of CSS Classes) --> interface:
- add (add class to html object)
- remove (add class from html object)
- toggle (1 listener action -> add, second -> remove)
- replace (replace class)
- contains (checks does the HTML contains the class)
*/

const magicBtn = document.querySelector('.make-a-magic');

magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
    // console.log(navEl.classList);
    // it is not possible to make a class manipulation by using querySelectorAll
    navEl.classList.add('new-class-added', 'site-nav-toggle'); // -add the class to the ul (is possible to add couple at the same time)
    navEl.classList.toggle('new-class-more');  // -> it is not possible to toggle 2 classes at the same time 
    navEl.classList.remove('site-nav-remove');

    const navItemEl = document.querySelectorAll('.site-nav_item');
    console.log(navEl.classList.contains('site-nav-remove')); // --> boolean

    linkEl.classList.add('site-nav_link--current');
});

// <---------------------------------------------------------------------------------------------->

const currentPageUrl = '/contacts';

const linkEl = document.querySelector(`.site-nav_link[href="${currentPageUrl}"]`);
console.log(linkEl);