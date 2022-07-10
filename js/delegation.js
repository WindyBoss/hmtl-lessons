/* 
* Event delegation events
* Common listener
* click filter
*/

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.textContent);

    /* The next IF checks if the click is made on necessary HTML element, in other words the click filter */
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }
    /* If the click will made on DIV it won't catch the click, but if on button it will work */

    console.log(e.target.nodeName); // ---> show type of HTML element (like button or div)


};

/*
* btn Add
*/

const addBtn = document.querySelector('.js-add-btn');
let labelCount = 7;

addBtn.addEventListener('click', onAddBtnClick);
function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Button-${labelCount}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCount += 1;
}