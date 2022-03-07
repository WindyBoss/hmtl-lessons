const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostreSQL' },
    { label: 'MongoDB' },
];

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', onFilterChange);

/* function that creates list */
const listItemMarkup = createListItemMarkup(tech); 
refs.list.innerHTML = listItemMarkup;

function createListItemMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join(''); 
}

/* filter function */
function onFilterChange(e) {
    const filter = e.target.value.toLowerCase(); // -> written in input must be converted to lowerCase

    const filteredItems = tech.filter(t =>
        t.label.toLowerCase().includes(filter)); // -> labels in array must be converted to lowerCase
    /* the filter should work both in the same letter size: lowerCase() or upperCase() */
    const listItemsmarkup = createListItemMarkup(filteredItems); // -> creates HTML elements from filtered objects
    populateList(listItemsmarkup);
};

function populateList(markup) {
    refs.list.innerHTML = markup; // -> rewrite the element's list based on filter
}


/*
* https://fusejs.io/ -> JavaScript library, that checks the written words on mistakes.
*/