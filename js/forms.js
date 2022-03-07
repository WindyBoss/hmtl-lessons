/*
Forms JS
- Submit Event
- Brawser Default
- element property
- class FormData 
- https://developer.mozilla.org/en-US/docs/Web/API/FormData 
*/

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit); // connect submit button of the form with 

function onFormSubmit(event) {
    event.preventDefault(); // -> gives the possibility to save form data

    console.log(event.currentTarget); // currentTarget -> shows the form code
    
    console.dir(event.currentTarget); // currentTarget -> shows the form code, its methods and interface

    console.log(event.currentTarget.elements.subscription.value); // -Shows the value of choice of the ratio input
    /* 
    in HTML form was added the input ratio (choice) with name subscription 
    and the previous code shows the value of this subscription
    */
    
    // The next code connects all elements in one variable
    const formElements = event.currentTarget.elements;
    console.dir(formElements);

    const mail = formElements.email.value; // helps to find the value of email input
    const password = formElements.password.value; // helps to find the value of password input
    const subscription = formElements.subscription.value;

    // The next code create the objects, based on information from form
    const formData = {
        mail,
        password,
        subscription,
    }
    console.log(formData);    
};

function onFormSubmitSecondOption(event) {
    event.preventDefault();

    // using class helps to make code shorter and more readable than previous version
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log('name: ', name)
        console.log('value: ', value)
    });

};