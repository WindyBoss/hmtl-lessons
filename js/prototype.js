// all objects possessed prototype feature which is written in __proto__.
// Usually there objects have all their internal function like Object.value, Object.keys, push and so on.
// But it is possible to create an object with the prototype of other object, and create an launch of objects
// with the last one, which possesses the all main function of objects

const objC = {
    z: 5,
};

const objB = Object.create(objC); // - creates a new object (objB) on a __proto__ of object C
objB.y = 2;

console.log(objC.isPrototypeOf(objB)); // this method helps to check is the one object the prototype of another.
// returns boolean

console.log(objC);
console.log(objB); // --> objB: __proto__: objC: __proto__: ...

// The prototype gives an access the properties of __proto__ objects
// in the next console objB has an access to the property 'z', which is only in objC
console.log(objB.y);
console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;
console.log(objA); // --> objA: __proto__: objB: __proto__: objC: __proto__: ...

console.log(objA.x); // --> objA: x
console.log(objA.y); // --> objA: __proto__: objB: y
console.log(objA.z); // --> objA: __proto__: objB: __proto__: objC: z

objA.z = 10;
console.log(objA); // --> instead of this:   objA: __proto__: objB: __proto__: objC: z=5 ---> objA: z=10

console.log(objA.hasOwnProperty('y')); // --> checks does the object possess this property or it is inherited from __proto__
// hasOwnProperty --> return boolean true if

console.log(objA.a); // if the the property is not inside the object, no inside all __proto__ it returns undefined


const dummyObj = Object.create({ message: 'this is the property of the __proto__ of the object' });
dummyObj.message = 'this is the property of the __proto__ of the object'; // this code as message as own property
console.log('dummyObj', dummyObj); // it will shows '{}', but in __proto__ will be 'message'
console.log(dummyObj.message);

const objD = Object.create({ d: 6 }); // d --> the part of __proto__
console.log('objD', objD);
console.log(objD.d)

objD.d = 50;
console.log('objD', objD);
console.log(objD.d)


