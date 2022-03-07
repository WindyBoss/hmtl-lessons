/* 
* If is necessary to find out which function is supported by browser, use: https://caniuse.com/
*/

/*
* Lazy load of the pictures - the function of browser, that helps to optimize browser performance
* Lazy load helps browser not to load everything, but to load that pictures, which are shown by scroll to user.
* For example you have 200 pictures, and it's too hard for browser. It takes a long time to load.
* It is necessary to add [loading ="lazy"] attribute.
*/

/* 
* if you want to add class on picture it is better to put event listener on window, but it will load all pictures in the beginning
* if you want animation of every single picture it is neccessary to add event listener to each picture separately
*/
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
});

/*
* { once: true } -> helps to limit event listening by adding the function of taking away event listener after the action is done
*/

function onImageLoaded(e) {
    e.target.classList.add('appear');
};


// window.addEventListener('load', onImageLoadedTogether, { once: true });
// function onImageLoadedTogether() {
//     console.log('Loading of picture is complete');
//     lazyImages.forEach(image => {
//         image.classList.add('appear');
//             console.log(image);
//     });
// };

/*
* https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener  \ -> addEventListener information
*/



