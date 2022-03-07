/*
There couple of types of exports:
*/
// <-------------------------------- Expert default -> allow to export one value from one JS file to another ------------------------------------------------

import Joi from 'joi';
const passwordSchema = Joi.string().min(3).max(10);



 export default function validatePassword(password) { 
         console.log(validatePassword(password));
         console.log(validatePassword(password).error);
    return passwordSchema.validate(password);  
};

// <------------------------------------------------------------------------------------------------------------------------------------------------------------------>

