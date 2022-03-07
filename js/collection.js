/*
adding the collection to the DOM
*/

const colorPickerOptions = [
    { label: 'red', color: 'red' },
    { label: 'blue', color: 'blue' },
    { label: 'brown', color: 'brown' },
    { label: 'aqua', color: 'aqua' },
    { label: 'green', color: 'green' },
];

// For manipulation with the list it is better to use cycle

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];

//     const buttonRef = document.createElement('button');
//     buttonRef.type = 'button';
//     buttonRef.textContent = option.label;
//     buttonRef.style.backgroundColor = option.color;
//     buttonRef.style.width = 50;

//     console.log(buttonRef);
//     elements.push(buttonRef);
// };


// <------- Instead of for it is better to use map()
// const elements = colorPickerOptions.map(option => {
//         const buttonRef = document.createElement('button');
//         buttonRef.type = 'button';
//         buttonRef.textContent = option.label;
//         buttonRef.style.backgroundColor = option.color;
//         buttonRef.style.width = 50;

//     buttonRef.addEventListener('click', () => {
//         document.body.style.backgroundColor = option.color;
//     });
//     return buttonRef;
// });
// console.log(elements);




// <-------------------------------------The function for such kind of arrays of objects ----------------------------->

const makeColorPickerOptions = options => {
    return options.map(option => {
        const buttonRef = document.createElement('button');

        buttonRef.type = 'button';
        buttonRef.textContent = option.label;
        buttonRef.style.backgroundColor = option.color;
        buttonRef.style.width = 50;

        buttonRef.addEventListener('click', () => {
            document.body.style.backgroundColor = option.color;
        });
        return buttonRef;
    });
};

const elements = makeColorPickerOptions(colorPickerOptions);

const colorPickerContainerEl = document.createElement('div');

colorPickerContainerEl.append(...elements); // in such situation you can only use spread

document.body.appendChild(colorPickerContainerEl);