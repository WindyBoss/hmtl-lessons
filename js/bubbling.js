/* Event bubbling 
* event target - html element, which was clicked
* event currentTarget - html element, which catch the click (it can be parent element)
*/

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

/* 
Instead of the next code it is better to catch the events from all container by using one main element (in such situation it is a window)

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);
*/

window.addEventListener('click', e => {
    console.log(e.target);
    console.log(e.currentTarget);
});


function onParentClick (evt) {
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
};

function onChildClick (evt) {
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
};

function onInnerChildClick (evt) {
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
};