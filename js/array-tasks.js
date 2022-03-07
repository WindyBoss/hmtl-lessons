function filterArray(numbers, value) {

    let number = [];
    //   for (let number of numbers) {
    //       if (number > value && number < numbers[number.length - 1]) {
    //    numbers.push(number); 
    //       }
    //       console.log(numbers);
    //             return numbers;
    //   }

    for (let i of numbers) {
        if (i > value) {
            number.push(i);
        }
    }
    return number;
}
   
// This function the numbers in array "numbers" that are higher than "value"

    console.log(filterArray([1, 2, 3, 4, 10, 20, 30], 5));

    function getEvenNumbers(start, end) {
        // Change code below this line
     let array = [];
       for (let i = start; i <= end; i++) {
         if (i % 2 === 0) {
           array.push(i);
         }
       }
       return array;
       // Change code above this line
       }

console.log(getEvenNumbers(5, 10));