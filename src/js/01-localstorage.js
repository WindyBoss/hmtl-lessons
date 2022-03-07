const user = {name:'Mango',age:2
};

console.log(user);


/*
* JSON.stringify -> help to make a string from all types of data, this can help to saved the data in json format file and local+session storage
*/
console.log(JSON.stringify(user));

/*
* JSON.parse -> help to take a string from JSON and make to an code
*/
const savedUserData = '{"name":"Mango","age":2}';
console.log(JSON.parse(savedUserData));

/*
* localStorage -> variable, that saved the local data from webpage, and is good for the forms, when let say webpage was reloaded and it saves all filled input by users

* setItem() -> function to add a data to local storage. It needs a key [user-data] -> in example below, and also records ONLY STRINGS
* getItem() -> function to take a data from local storage
*/
console.log(localStorage);

localStorage.setItem('user-data', JSON.stringify(user));
console.log(localStorage);

const savedData = localStorage.getItem('user-data');
console.log('saveData -->  ', savedData);
console.log(savedData);



const parsedData = JSON.parse(savedData);
console.log(parsedData);

console.log('parsedData --> ', parsedData);