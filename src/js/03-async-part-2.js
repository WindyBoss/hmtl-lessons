
async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍏',
  };

  // return Promise.resolve(fruits[name]);
  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 600)); // -> the but with setTimeout()
};


async function makeSmoothieByAwait() {
  try {
  console.time('makeSmoothieByAwaitSeparate');
  const apple = await getFruit('apple');
  console.timeEnd('makeSmoothieByAwaitSeparate');
  } catch (error) {
    console.log('Error' + error);
  }
};

console.log(1);  // -> this console.log() will be processed before async await and fetch functions

makeSmoothieByAwait();

console.log(2); // -> this console.log() will be processed before async await and fetch functions

makeSmoothieByFetch();

console.log(3); // -> this console.log() will be processed before async await and fetch functions
// the next code id doing a fetch spagetti, in which is easy to lose and hard to understand, so async await is much better for understanding code

function makeSmoothieByFetch() {
  getFruit('apple').then(apple => {
    console.log(apple);

    getFruit('kiwi').then(kiwi => {
      console.log(kiwi);
    });
  })
}
