// Cycle "while"

// Cycle "while" is checking all options until it reach the value "false", but shows all value "true".

let sizeOfTits = 0;

while (sizeOfTits < 6) {
    console.log('sizeOfTits: ', sizeOfTits);
    sizeOfTits += 1;
}



// cycle "do...while" is doing the cycle until the conditions in part "while" will be reach true. 

let password = '';

do {
  password = prompt('Введіть пароль довше 4-х символів', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);
