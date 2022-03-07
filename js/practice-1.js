// Practice
const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // return all orders which were made in the next form --> dish: Pizza - email: solomon@topmail.net
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
        //the next variable collects all emails in array
        const emails = this.orders.map(order => order.email);
      console.log(emails);
        //the next variable collects all emails without repeats in object
        const uniqueEmails = new Set(emails);
      console.log(uniqueEmails);
        //the function returns all emails without repeats in array
        return [...uniqueEmails];
    },
    //the function returns the objects of orders based on email
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
};

console.log(historyService.orders);
// return all orders which were m
console.log(historyService.getOrdersLog());
historyService.getEmails();
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail('jacob@hotmail.com'));







class Storage {
 constructor (storage = []) {
  this.storage = storage; 
 }
  
  getItems() {
    return this.storage;
  }
  
  addItem(newItem) {
    this.storage.push(newItem);
    return this.storage;
  }
  
  removeItem(itemToRemove) {
    // it is shorter version of the code which is not commented
    // this.items = this.items.filter(item => item !== itemToRemove)
    for (const item of this.storage) {
      if (item === itemToRemove) {
        this.storage.splice(item, 1);
      }
    }
    
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]






class StringBuilder {
 constructor (initialValue) {
   this.value = initialValue; 
 }
  
  getValue() {
   return this.value; 
  }
  
  padEnd(str) {
    // const array = [...this.value];
    // console.log(array);
    // array.push(str);
    // console.log(array);
    // const string = array.join('');
    // this.value = string;

    //easier verstion of code
    this.value = this.value + str;
    console.log(this.value);
  }

  // padEnd(str) {
  //   this.#value += str;
  // }
  
  padStart(str) {
    // const array = [...this.value];
    // console.log(array);
    // array.unshift(str);
    // console.log(array);
    // const string = array.join('');
    // this.value = string;

    //easier verstion of code
    this.value = str + this.value;
    console.log(this.value);

  }

  //   padBoth(str) {
  //   this.padStart(str);
  //   this.padEnd(str);
  // }
  
  padBoth(str) {
    // const array = [...this.value];
    // console.log(array);
    // array.unshift(str);
    // console.log(array);
    // array.push(str);
    // console.log(array);
    // const string = array.join('');
    // this.value = string;
    
    //easier verstion of code
    this.value = str + this.value + str;
    console.log(this.value);
  }
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


class Car {
  // Change code below this line

  #brand; // you need to declare the private property before the constructor
  constructor({ brand, model, price }) {
    this.#brand = brand; // you private property must have the next syntax
    this.model = model;
    this.price = price;
  }
  
  getBrand() {
    return this.#brand; // you call add private property to the function, but don't forget about '#'
  }
  
  changeBrand(newBrand) {
   this.#brand = newBrand; 
  }

  // Change code above this line
}



class Car {
  // static properties are good for saving information about the constructor (class)
  static #MAX_PRICE = 50000;
  // also static can be the function. The next function is a filter, which checks the price 
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) { // don't forget about 'Car.'
      return "Error! Price exceeds the maximum"; 
      } else {
        return "Success! Price is within acceptable limits"; 
      }
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"