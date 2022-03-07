/* 
* delegation
* one from a lot
* SET
*/


/*
----------------------> First Version of the code <-------------------
const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active'); // --> which recieved the class

    // ---> Instead of the next code can be used <---
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('tags__btn--active');
    }
    // --> the next one <---
    currentActiveBtn?.classList.remove('tags__btn--active');
    
    const nextActiveBtn = e.target; // -> next clicked element
    e.target.classList.add('tags__btn--active');
    selectedTag = nextActiveBtn.dataset.value; // -> the value of data attribute in variable 'selectedTag'

};
*/


/* ----------------> The next version of the code <-------- */
/* 
This version the code helps to collect all button value and push it into the array
But it do not check the repetety of the tags and push everything
*/
/*
const tagsContainer = document.querySelector('.js-tags');
let selectedTags = [];

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    // Let to put and take the class to the HTML element
    e.target.classList.toggle('tags__btn--active');

    selectedTags.push(e.target.dataset.value);

    console.log(selectedTags);
}
*/

/* ----------> Third version of the code <------------- */
const tagsContainer = document.querySelector('.js-tags');
let selectedTags = new Set();
// Set --> construction functin, which help to collect data without repeats

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') { // -> filter clicks only on button element
        return;
    }

    isActive(e);

    // Let to put and take the class to the HTML element
    e.target.classList.toggle('tags__btn--active');
    console.log(selectedTags);
}

/* It is better to divide for smaller functions */
function isActive(e) {
    const btn = e.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');

    // The next code check does the Set possess the tag and if possess -> deletes, if not -> adds
    if (isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }
}












/*
The next code is very good, because cut the whole length of the code.
* currentActiveBtn?.classList.remove('tags__btn--active')
For example:
*/

const settings = {
    theme: {
        userDefined: {
            color: 'black',
        },
    },
};

// instead of this:
if (settings && settings.theme && settings.theme.userDefined) {
    console.log(settings.theme.userDefined.color);
}

// Is better to use: 
console.log(settings?.theme?.userDefined?.color);