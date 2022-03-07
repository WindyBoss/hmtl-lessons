// <------------------------------------- Function "for" are used for creation a cycle -------------------------------------->


// Example: ----> Cycle

for (let i = 0; i < 10; i += 1) {
    console.log(i);
}



// Task: - make a script, which calculate total amount of salaries of all workers
// Number of worker are variables
// Salary is a random number from 500 to 5000
// show a total amount in console

const maxSalary = 5000;
const minSalary = 500;
const employees = 10;
let totalSalary = 0;

for (let i = 1; i < employees; i += 1) {
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

    console.log(`Salary of the worker ${i} - ${salary}$`);

    totalSalary += salary;
}

console.log(` Total Salary:  ${totalSalary}$`);



// += i is the same as i++  ------->  helps to make a cycle and check every next point

'let i = 1 ---> the start point'
'i < employees ---> the max point'
'i += 1 = i + 1 = i++ ------->  helps to make a cycle and check every next point' 
'i += x ---> help the check every x points'



let a = 5;              // --> console.log shows a = 6, b = 5, because ++ add 1 to the a above
let b = a++; 
console.log(a);
console.log(b);


let c = 5;             // --> console.log shows c = 5, d = 6
let d = c + 1
console.log(c);
console.log(d);

let e = 5;              // --> console.log shows e = 6; f = 6;
e += 1;
let f = e;
console.log(e);
console.log(f);


let g = 5;              // --> console.log shows g = 6, h = 6, 
let h = ++g
console.log(g);
console.log(h);

// for cycle, using i++, i + 1 or += 1 it doesn't matter; 



// Task: make a sum of the pair numbers, the segment of each is written in variables

const min = 13;
const max = 37; 
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
        console.log(`Pair: ${i}`);
        total += i;
    }
}


' % - show the rest of dividing (5/2 = 2*2 + 1 ---> % = 1)'
'!==  - strong unequal'

// Alternative



for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        console.log(`Unpair: ${i}`);
        continue;
    }

    console.log(`Pair: ${i}`);
    total += i;

}

console.log(total);

// directive continue - helps to pass through the cycle without adding it to inside the algorythm

// Interesting example 
const maxNew = 10;
for (let i = 0; i < maxNew; i += 1) {
  console.log(`${maxNew} % ${i} = `, maxNew % i);
}


// operator Continue -> operator, which lets the cycle to pass through the iteration without code making (example -> show only inpaired numbers) 
const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
}