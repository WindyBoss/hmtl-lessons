const validJSON = '{"name": "Mango", "age":3 }';
const invalidJSON = '{Beckend returns shit}';


try {
  console.log(1);

  console.log(JSON.parse(validJSON));
  console.log(2);
console.log(JSON.parse(invalidJSON));
  console.log(3);  // -> this code part will be not processed
} catch (err) {
  console.log('err');
  if (err.name === 'SyntaxError') {
    console.log('Parse Error do something');
  };
};

console.log('After try...catch');