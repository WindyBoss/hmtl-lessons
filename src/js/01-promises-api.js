
/* Promise Example */

let data = 'here is empty';

const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;

    setTimeout(() => {
    if (canFulfill) {
        resolve('✅ Promise is successfully fulfilled')
    };
        reject('❌ Promise is rejected')

    }, 1000);
});

console.log(promise);

/*
promise.then(
    result => {
        console.log(result);
    },
    error => {
        console.log(error);
    }
);
*/

// promise.then(onFulfilled, onRejected);
console.log(data); // -> external variables can not be changed in promises


function onFulfilled(result) {
    console.log(result);
    data = result;
};


function onRejected(error) {
    console.log(error);
};


/* 
promise.then -> syntax:
* promise.then(onSuccess, onError)
*/


/*
<----------------------Promise chaining----------------------------->
promise.then(onFulfilled, onRejected).then(x => {
    console.log(x); // -> x = undefined, because first then did not return anything
});
*/

promise.then(result => {
    console.log(result);
    return result;
}).then(x => {
    console.log(x); // -> x = result
    throw new Error('error in second then');
}).then(y => {
    console.log(y); //-> y = undefined, because first then did not return anything
    throw new Error('error in third then');
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('this code will be done no matter what');
});
