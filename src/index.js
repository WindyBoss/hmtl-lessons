/*
*/

// const input = document.querySelector('.validation');
// const button = document.querySelector('.button');

import validation from './js/validate-password';

const onButtonClick = function () {
    const inputValidation = validation(input.value);
    input.addEventListener('input', inputValidation, {once: true});
}

button.addEventListener('click', onButtonClick, {once: true});
// <------------------------------------------------------------------------------------------------------------------------------------------------------------------>

// import exportedByDefaultFunction from './js/api-server';
// exportedByDefaultFunction.fetchAllUsers();

// const shortId = require('shortId');
// exportedByDefaultFunction.fetchUserById(shortId.generate());
// exportedByDefaultFunction.updateUserById(shortId.generate());

// <------------------------------------------------------------------------------------------------------------------------------------------------------------------>
// /* Import option 2 

import {
    fetchUserById,
    fetchAllUsers,
    updateUserById,
    x,
    y,
    addUser,
} from './js/api-server';

console.log(fetchAllUsers);
console.log(fetchUserById);
console.log(updateUserById);
console.log(x);
console.log(y);
addUser('mango');
// <------------------------------------------------------------------------------------------------------------------------------------------------------------------>


// Import option 3
// import * as importAllTogether from './js/api-server';

// console.log(importAllTogether); // -> it will show the object of objects



// <------------------------------------------------------------------------------------------------------------------------------------------------------------------>
import onOpenModal from './js/on-open-modal';
window.addEventListener('click', onOpenModal);