// Examples of tasks

// function, which count the number of properties and return it in variable propCount

function countProps(object) {
    let propCount = 0; 
    propCount = Object.keys(object).length;
    return propCount;
}

// the next code creates 2 variables with keys and their values in separate arrays
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  const keys = Object.keys(apartment);

  for (const key of keys) {
    values.push(apartment[key])
  };

console.log(keys);
console.log(values);



// This code is similar to the first example, but also check each key, 
// is it in the object as property or not and count which is
function countPropsNewVersion(object) {
    // Change code below this line
    let propCount = 0;
    const newKeys = [];
    
    for (const key of Object.keys(object)) {
      if(object.hasOwnProperty(key)) {
        newKeys.push(key);
      }
    }
    propCount = newKeys.length;
    return propCount;
  }


// the next function count the total sum of values of the keys
  function countTotalSalary(salaries) {
    let totalSalary = 0;
    
  for (const value of Object.values(salaries)) {
    totalSalary += value;
  }
    return totalSalary;
  }



// the next code helps to separately add all values of all objects of the same property into one array
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  
   for (const color of colors) {
     hexColors.push(color.hex);
     rgbColors.push(color.rgb);
   }



   //The next code shows the values of one property of the object, which is searched by the value of other property 
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
	let price = 0;
	
  	for (const product of products) {
		if(product.name === productName) {
    		price = product.price;
          	return price;
    	}    
	}
  return null;
}


  // the next function shows all values of the same property from all Objects
  const newProducts = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Change code below this line
  
  let values = [];
    
    for (let product of newProducts) {
      
      for (let key of Object.keys(newProducts)) {
        if (key === propName) {
          values.push(product[key]);
        }
      }
    }
    return values;
  }



// // example of destruction of object in function for minimizing unclear parameters, which function must consider
// // fist version
// function doStuffWithBook(book) {
//     const { title, numberOfPages, downloads, rating, public } = book;
//     console.log(title);
//     console.log(numberOfPages);
//   }
// // second version
//   function doStuffWithBookVersion2({ title, numberOfPages, downloads, rating, public }) {
//     console.log(title);
//     console.log(numberOfPages);
//   }




// this code helps to generate new Object by adding variable completed or other variables 
// in condition on their absence in an old object
  function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
  const newObject = {completed, category, priority, ...data};
    return newObject;
    // Change code above this line
  }
  


// next function helps to find the element and change its name
  const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      // Change code below this line
  
      const { books } = this;
  for (const book of books) {
      if (oldName === book) {
  
       books.splice(books.indexOf(book), 1, newName); 
      }
  }
      // Change code above this line
    },
  };



  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                this.potions.push(newPotion);
            }                 
            return `already exists ${potion.name}`;
        }
    },
    removePotion(potionName) {
        for (const potion of this.potions) {
      if (potionName === potion.name) {
        this.potions.splice(this.potions.indexOf(potion), 1);
        console.log(potion);
      }
    }
      
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
                console.log(`${oldName} -> ${newName}`);
            }
        }
    },
    // Change code above this line
  };

  console.table(atTheOldToad.potions);
  atTheOldToad.removePotion("Speed potion");
  console.table(atTheOldToad.potions);

//   atTheOldToad.updatePotionName("Stone skin", "Harry Potter");
//   console.table(atTheOldToad.potions);

  console.table(atTheOldToad.potions);
  atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
  atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
  console.table(atTheOldToad.potions);
  atTheOldToad.addPotion({ name: "Speed potion", price: 460 });
  console.table(atTheOldToad.potions);

  // if (!potion.name === newPotion.name) 


// W przypadku oryginalnego obiektu wezwanie atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }), zwraca ciąg 'Error! Potion Stone skin is already in your inventory!'
// W przypadku oryginalnego obiektu wezwanie atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }), zwraca ciąg 'Error! Potion Dragon breath is already in your inventory!''.
// Jeśli dodany potions już jest w tablicy potions, metoda addPotion nie dodaje do niego przekazanego obiektu
// Dla oryginalnego obiektu po wywołaniu atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }), tablica potions się nie zmienia



// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//       addPotion(newPotion) {
//           for (const potion of this.potions) {
//               if (potion.name === newPotion.name) {
//                   this.potions.push(newPotion);
//               }                        
//           }
//       },
//       removePotion(potionName) {
//           for (const potion of this.potions) {
//         if (potionName === potion.name) {
//      this.potions.splice(this.potions.indexOf(potion), 1);
//         }
//       }
//     },
//       updatePotionName(oldName, newName) {
//           for (const potion of this.potions) {
//               if (potion.name === oldName) {
//                   potion.name = newName;              
//               }
//           }
//       },
//   };