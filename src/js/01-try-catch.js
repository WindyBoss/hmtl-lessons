
/*
* try..catch syntax
*/

try {
  console.log('inside first TRY');
} catch (err) {
  console.log(' first ERROR: ' + err.message);
}
console.log('After first TRY...CATCH');


// ---------------------------------------------------------------------
try {
  console.log('inside second TRY');

  myVar;

  console.log('Inside second TRY, but after myVar'); // -> this code part will be not processed
} catch (err) {
  console.log('ERROR: ' + err.name);
  console.log('ERROR: ' + err.message);
  console.log('ERROR: ' + err.stack);
}

console.log('After second TRY...CATCH');