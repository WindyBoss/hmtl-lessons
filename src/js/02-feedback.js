import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};


/* 
The name of storage key is saved as unchangable variable.
*/
const STORAGE_KEY = 'feedback-msg'; 

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

refs.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value; // --> saves it into the object

    console.log(formData);
});



populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();

    console.log('form submit');

    e.currentTarget.reset(); // -> clear all inputs
    localStorage.removeItem(STORAGE_KEY); // -> delete information of 'storage key' from local storage 
};

// the next function saves form's input into the local Storage
function onTextareaInput(e) {
    const message = e.target.value;
    // console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
    // console.log(localStorage);
};

// the next function takes saved information from local Storage and returns it to the input.
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        // console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}