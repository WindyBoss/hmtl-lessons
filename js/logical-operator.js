//Boolean operator 
console.log(Boolean(1));
console.log(Boolean(0));
//Boolean and && operators transform everything to "true" except:
// 0, 
// NaN, 
// null, 
// undefined, 
// empty line: "" or '', 
// false

// && operator
console.log(5 && 6);
//&& operator shows the last data in brackets or the first "false" data, which is the same as in Boolean operators
//and do not shows everything after "false" data.

console.log(5 && 0 && "hello");
console.log(5 && 7 && "hello" && 8 && "mango");

// || operator 
// This operation stops on the first "true" and shows it
console.log(5 || 7 || "mango");
console.log(5 || 0 || "mango");
console.log(0 || 7 || "mango");

console.log(5 < 1 || "mango" || 1 < 5 );



// invertion operator !
console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!'Hello!');