const cart = {
    items: [],
    getItem() {
        return this.items;
    },
    addProduct(product) {

        for (const item of this.items) {
            console.log(item);
        
            if (item.name === product.name) {
                console.log('This product has already been added - ', product.name);
                item.quantity += 1
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    removeProduct(removedProduct) {
        const { items } = this;

        for (let i = 0; i < items.length; i++) {
            const { name } = items[i];

            if(name === removedProduct && items[i].quantity > 1) {
            items[i].quantity -= 1;
            console.log(`Removed Product founded - ${name}`);
            console.log(`Removed Product index - ${i}`);
            } else if(name === removedProduct) {
                items.splice(i, 1);
                console.log(`Removed Product from cart Index - ${i} and name:${name}`);
            }
        };
    },
    clearCart() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let totalAmount = 0;

        for (const { price, quantity } of items) {
            totalAmount += price * quantity;
        }
        console.log(totalAmount);
        return totalAmount;
    },
    addQuantity(productName) {
        const { items } = this;
        for (const item of items) {
            if (productName === item.name) {
                item.quantity += 1;
                console.log(`${item.name} new quantity: ${item.quantity}`);
                console.table(items);
                return item.quantity;
            }
        }
    },
    removeQuantity(productName) {
        const { items } = this;
        for (const item of items) {

            if(item.name === productName && item.quantity > 1) {
            item.quantity -= 1;
            console.log(`Removed Product founded - ${item.name} - its quantity: ${item.quantity}`);
            return item.quantity
            } else {
                return
            }
        };
    },
}
console.log(cart.getItem());

cart.addProduct({ name: '🍋', price: 50});
cart.addProduct({ name: '🍓', price: 70});
cart.addProduct({ name: '🍑', price: 80});
cart.addProduct({ name: '🍍', price: 100});
cart.addProduct({ name: '🍋', price: 50});
cart.addProduct({ name: '🍓', price: 70});
cart.addProduct({ name: '🍍', price: 100});


console.table(cart.getItem());
cart.countTotalPrice();
cart.addQuantity('🍓');
cart.removeQuantity('🍓');

cart.removeProduct('🍓');
cart.removeProduct('🍑');
console.table(cart.getItem());

const getProductTotalPrice = function ({ price, quantity }) {
    return price * quantity;
}

console.log(getProductTotalPrice(cart.items[1]));

cart.clearCart();
console.table(cart.getItem());

