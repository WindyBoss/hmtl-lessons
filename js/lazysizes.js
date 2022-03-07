/*
* Not all browsers support lazy loading of pictures
* To correct this library 'lazysizes' exists
*/
/* 
Sources:
* https://www.npmjs.com/package/lazysizes
* https://github.com/aFarkas/lazysizes#readme
* https://cdnjs.com/libraries/lazysizes
*/

/*
Instruction:
1. add class="lazyload" as attributes of the <img>
2. data-src instead of src as attributes of the <img>
3. add the next script to himl document <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

* Remember -> it is better to launch the libraries only, when the browser do not support the function
*/


/* 
The next code checks does the browser possess the function support 'loading'
HTMLImageELement.propotype -> checks all supported attributes of tag <img> in browser
*/
if ('loading' in HTMLImageElement.prototype) {
    addSrcToLazyImages();
} else {
    addLibraryScript();
};

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(e) {
    e.target.classList.add('appear');
};

/* the next function create <script> with 'src' and other attributes */
function addLibraryScript() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" 
    script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.crossOrigin = "anonymous";
    
    document.body.appendChild(script);
}

/* the next function add attributes 'src' to tag <img>, which wasn't in the HTML document before */
function addSrcToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(image => {
        image.src = image.dataset.src;
});
}


/*
* <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
*/