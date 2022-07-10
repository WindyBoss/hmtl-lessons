
/*
All libraries needs require. 
*/

// Package Express
const express = require('express'); // -> This is the way of launching library

const app = express(); // -> code for launching server to variable

/*
*,use -> function of launching of user to the port
*.send -> respond for browser (to user)
*/
app.use('*', (req, res) => {
    console.log('Ask from browser');
    res.send('<h1>This is browser respond</h1>');
})

/*
*address().port -> it is the port number (2101)
*/
const listener = app.listen(2101, () => {
    console.log(`Server was launched on port ${listener.address().port}`);
})

// Packege JOI example

const Joi = require('joi');
const passwordSchema = Joi.string().min(3).max(15).alphanum();
console.log(passwordSchema.validate('ddd'));

/*
* Example console.logs
console.log(passwordSchema.validate('1'));
console.log(passwordSchema.validate('ddd'));
console.log(passwordSchema.validate('verylongckechpointwhichwillnotpassthevalidation'));
console.log(passwordSchema.validate('255'));
console.log(passwordSchema.validate('2www'));
console.log(passwordSchema.validate(123));
console.log(passwordSchema.validate('рпвар'));
*/
/*
Joi specification:
passwordSchema -> function
- Joi. -> call of the libraries functions
- string() -> validate code (only strings)
- min(x) -> min x number of symbols in input
- max(x) -> max x number of symbols in input
- alphanum() -> only latin alphabet
*/

// shortid
const shortId = require('shortId');
console.log(shortId.generate());
/*
shortid specification:
shortId.generate() -> generates unique ID
*/