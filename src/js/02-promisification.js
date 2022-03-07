

/* The next code can do the same as promise, but it is too complicated
const makeOrder = (dish, onSuccess, onError) => {
    const DELAY = 1000;
    const passed = Math.random() > 0.5;


    setTimeout(() => {
        if (passed) {
            onSuccess('✅ This is your dish')
        } else {
            onError('❌ Sorry, we do not serve this dish today')
        }
    }, DELAY);
};

makeOrder('pizza', onMakeOrderDishSucceed, onMakeOrderDishError);

function onMakeOrderDishSucceed(result) {
    console.log(result);
}
function onMakeOrderDishError(error) {
    console.log(error);
}
*/

const makeOrder = dish => {
    const DELAY = 1000;

    const promise = new Promise((resolve, reject) => {

        const passed = Math.random() > 0.5;
        setTimeout(() => {
            if (passed) {
                resolve('✅ This is your dish')
            }
            reject('❌ Sorry, we do not serve this dish today')
        }, DELAY);

    });
    return promise; // -> this return is must have
};

makeOrder('pizza').then(onMakeOrderDishSucceed).catch(onMakeOrderDishError);

function onMakeOrderDishSucceed(result) {
    console.log('onMakeOrderDishSucceed');
    console.log(result);

}
function onMakeOrderDishError(error) {
    console.log('onMakeOrderDishError');
    console.log(error);

}

/* If you are sure that the result will be positive */
const makeOrderSecond = dish => {
    return Promise.resolve('✅ This is your dish')
};

makeOrderSecond('pizza').then(onMakeOrderDishSucceed);


// ! Fetch Promise

/*
Pokemons: https://pokeapi.co/
*/

const fetchPokemonById = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
};

function onFetchSuccess(pokemon) {
    console.log(pokemon);
};

function onFetchFailed(error) {
    console.log(error);
};


for (let i = 1; i < 5; i++) {
    fetchPokemonById(i).then(onFetchSuccess).catch(onFetchFailed);
}