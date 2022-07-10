//! Async - await - the type of function which stop the interpretation inside the function and wait until the result will be reached and write the helps to save the results

/*
type of syntax of async functions:
* async function fn () {}
* const fn = async function () {};
* const arr = async () => {};
* const x = { async getName(){} } -> for objects
* class X { async getName(){} } -> for classes
*/

async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍏',
  };

  return new Promise((resolve, reject) => setTimeout(() => resolve(fruits[name]), 600));
};


async function makeSmoothie() {
  try {
    console.time('makeSmoothieByAwaitSeparate');

    const apple = getFruit('apple');
    const berry = getFruit('strawberry');
    const kiwi = getFruit('kiwi');
    const fruits = await Promise.all([kiwi, apple, berry]); // -> await gives a possibility to receive a result from async function
    console.log(fruits);

    console.timeEnd('makeSmoothieByAwaitSeparate');
    // return fruits;

  } catch (error) {
    console.log('Error' + error);
  }
};


makeSmoothie()
// .then(fruits => console.log(fruits));

