/*
Creation of the product card
*/

// example of data for product

const products = [
    {
    producer: 'Krosno - Polish Glassware Producer',
    title: 'KROSNO Tall Water Juice Drinking Glasses | Set of 6 | 18.3 oz | Avant-Garde Collection | Highball & Tumbler Crystal Glass | Perfect for Home, Restaurants and Parties | Dishwasher and Microwave Safe',
    category: 'Water Glasses',
    rank: 15,
    price: 29.99,
    shipping: 'free shipping by Amazon',
    available: true,
    onSale: true,
    picture: 'https://m.media-amazon.com/images/I/61voIgc5X6L._AC_SX679_.jpg'
    },

    {
    producer: 'Krosno - Polish Glassware Producer',
    title: 'KROSNO Tall Water Juice Drinking Highball Glasses | Set of 6 | 11.8 oz | Blended Collection | Perfect for Home, Restaurants and Parties | Dishwasher Safe',
    category: 'Water Glasses',
    rank: 13,
    price: 24.99,
    shipping: 'free shipping by Amazon',
    available: false,
    onSale: true,
    picture: 'https://m.media-amazon.com/images/I/717R33zSvEL._AC_UL320_.jpg'
    },

    {
    producer: 'Krosno - Polish Glassware Producer',
    title: 'KROSNO Water Juice Tumbler Drinking Glasses | Set of 6 | 13.5 oz | Splendour Collection | Perfect for Home, Restaurants and Parties | Dishwasher and Microwave Safe',
    category: 'Water Glasses',
    rank: 20,
    price: 29.99,
    shipping: 'free shipping by Amazon',
    available: true,
    onSale: false,
    picture: 'https://m.media-amazon.com/images/I/61qaIkyJeNL._AC_UL320_.jpg'
    },
    {
    producer: 'Krosno - Polish Glassware Producer',
    title: 'KROSNO Long Drink Water Juice Drinking Highball Glasses | Set of 6 | 11.8 oz | Blended Collection | Perfect for Home, Restaurants and Parties | Dishwasher Safe',
    category: 'Water Glasses',
    rank: 25,
    price: 25.99,
    shipping: 'free shipping by Amazon',
    available: false,
    onSale: false,
    picture: 'https://m.media-amazon.com/images/I/61y8DzzVQZS._AC_UL320_.jpg'
    },
];

// HTML code

// const makeProductCard = ({ producer, title, category, price, shipping, available, onSale, picture }) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const titleEl = document.createElement('h2');
//     titleEl.textContent = title;
//     titleEl.classList.add('product-name');

//     const producerName = document.createElement('p');
//     producerName.textContent = producer;
//     producerName.classList.add('producer-name');

//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Price: ${price}$`;
//     priceEl.classList.add('product-price');

//     const shippingEl = document.createElement('p');
//     shippingEl.textContent = shipping;
//     shippingEl.classList.add('shipping-info');

//     const imageEl = document.createElement('img');
//     imageEl.src = picture;
//     imageEl.classList.add('product-image');

//     productEl.append(imageEl, producerName, titleEl, priceEl, shippingEl);

//     return productEl;
// };

const elements = products.map(({ producer, title, category, rank, price, shipping, available, onSale, picture }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const categoryRankEl = document.createElement('p');
    categoryRankEl.textContent = `Number ${rank} in category ${category}`;
    categoryRankEl.classList.add('product-rank');

    const titleEl = document.createElement('h2');
    titleEl.textContent = title;
    titleEl.classList.add('product-name');

    let availability = '';
    if (onSale && available) {
        availability = 'Delivery tomorrow';
    } else if (onSale && !available) {
        availability = 'Delivery Soon';
    } else if (!onSale && available) {
        availability = 'Will be available after 10 days';
    } else if (!onSale && !available) {
        availability = 'Producct is not available';
    }

    const availabilityEl = document.createElement('p');
    availabilityEl.textContent = availability;
    availabilityEl.classList.add('product-availability')

    const producerName = document.createElement('p');
    producerName.textContent = producer;
    producerName.classList.add('producer-name');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Price: ${price}$`;
    priceEl.classList.add('product-price');

    const shippingEl = document.createElement('p');
    shippingEl.textContent = shipping;
    shippingEl.classList.add('shipping-info');

    const imageEl = document.createElement('img');
    imageEl.src = picture;
    imageEl.classList.add('product-image');

    productEl.append(imageEl, producerName, categoryRankEl, titleEl, priceEl, shippingEl, availabilityEl);

    return productEl;
});

const productList = document.createElement('ul');
productList.classList.add('product-list');
productList.append(...elements);
document.body.appendChild(productList);

