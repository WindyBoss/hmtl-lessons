/*
Pattern - 'The object of links'

Events:
- blur and focus
- input and change
- checkbox and check property

*/

const refs = { 
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

/* 
object of HTML element links it is used instead the next code

const input = document.querySelect('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const license = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');
*/

// refs.input.addEventListener('focus', onInputFocus); // - event focus -> click on element 
// refs.input.addEventListener('blur', onInputBlur); // - event blur -> opposite to focus -> click outside element
// refs.input.addEventListener('change', onInputChange);  // - event change -> listen all changes in the input after enter
// refs.input.addEventListener('input', onInputChange); // - event input -> listen all changes in the input even 1 sight


// function onInputChange(event) {
//     console.log(event.currentTarget.value); // this code console everything what was written inside the input and pressed 'Enter'
//     refs.nameLabel.textContent = event.currentTarget.value; // insteresting code, which change the label in button
// };


// function onLicenseCheckboxChange(event) {
//     console.log(event.currentTarget); // console the object of input checkbox
//  };


refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseCheckboxChange);

function onInputFocus() {
    console.log('input received focus - (Focus) Event');
};

function onInputBlur() {
    console.log('input lost focus - (Blur) Event');
};

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value; 
};

function onLicenseCheckboxChange(event) {
    console.log(event.currentTarget.checked); // if checked --> true, not -> false ---> does used click on checkbox
    refs.btn.disabled = !event.currentTarget.checked; // open the button under the checkbox
};

/*
parseInt() --> remakes all strings to number
*/