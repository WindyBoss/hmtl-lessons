//EXAMPLE Discount

// TASK: create a discount script, which is based on the past spend of the customer. The conditions below:

// <--- IF the total spend of the customer 100 <---> 1000  -> discount 2% - bronze account
// <--- IF the total spend of the customer 1000 <---> 5000  -> discount 5% - silver account
// <--- IF the total spend of the customer 5000+   -> discount 10% - platinum account
// <--- IF the total spend of the customer lower than 100 --> no discount,
// Collect the data by the input and use the button to calculate the discount and sum it with 


// Additionally make a script that sum the previous spend and a new payment


const btnAdd = document.querySelector('button[data-add]');
let valueInput = document.querySelector('input[data-value]');
const outPut = document.querySelector('.js-output span');
const addPayment = document.querySelector('.add-payment');
const communicator = document.querySelector('.js-text[data-text] span');

let discount = 0;
const totalSpend = valueInput;
const payment = addPayment;
let text;

btnAdd.addEventListener('click', function () {
    if (valueInput.value >= 100 && valueInput.value < 1000) {
        discount = 0.02;
        text = `bronze account - ${discount * 100}%`;
        console.log(text);
    } else if (valueInput.value >= 1000 && valueInput.value < 5000) {
        discount = 0.05;
        text = `silver account - ${discount * 100}%`;
        console.log(text);
    } else if (valueInput.value >= 5000) {
        discount = 0.1;
        text = `platinum account - ${discount * 100}%`;
        console.log(text);
    } else {
        text = `no account`;
        console.log(text);
    }

    const value = Number(valueInput.value) + (Number(addPayment.value) * (1 - discount));

    console.log(value);
    outPut.textContent = value;
    communicator.textContent = text;
})







