/* RULES OF VARIABLES

1. Do not use <--const--> without the definition.
2. Do not use <--let--> or <--const--> without the variables.
3. If you use let with name of variable, but without definition, browser will show "undefined".
4. If you use variable (let or const) before its definition it will cause the mistake.


<!-- Type of data -->
Type of data: 

A. Number
const age = 100;

B. String
const name = 'Vitaliy';

C. Boolean (true or false)
const isMarried = false;

D. Null (to show no data)
const guest = null;

E. Undefined 
let name // undefined;

If you want to check use "typeof"


<!-- Confirm or Prompt Window -->
console.log of the confirm window always has meaning "true" or "false"

<!-- Numbers -->
1. Number() - help to transform the data from prompt() from string to numbers, but of course, if the data, that were written by customers is a number.

2. Number.parseInt() - help to take a number from string (for example 50px --> 50 )
parseInt - do not recognize anything except numbers (even . or ,). Also this function do no work without definition.

3. Number.parseFloat() - help to take a number from string (for example 200.34px --> 200.34)

4. toFixed(number) - help to cut the number after ".", but make it string

5. Math - allow to make calculations. ".pow" - help to make power (2^3) = 2*2*2 = 8  --> Math.pow
"**" can replace Math.pow
Math.sqrt - корінь


6. 'break' - use in if else, switch or in other functions to stop the algorythm
7. use switch only if the number is dirrect - not a segment of number, in other way use if else


Beneficial advices for js coders:

<!-- MODULE RULES -->

Add "type="module"" to <script>. It will help to secure your js codes against JS conflicts in code. Additionally, it will permanently add "use strict" in js code, and it wont be necessary to add it to you js file before code. 


<!-- Matrioshka --> 

Use the way of "Matrioshka" --> XD
Example: console.log(Number(mySalary.toFixed(2)));


<!-- TRUE or FALSE -->
false = 0
true = 1

<!-- NaN -->
NaN - not a number

*/
