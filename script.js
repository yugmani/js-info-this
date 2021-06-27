// **************************************
// Object methods, "this"
// **************************************

// Actions are represented in JavaScript by functions in properties.

// 1. Method Examples
let user1 = {
  name: 'John',
  age: 30
};

// a Function Expression to create a function and assign it to the property of the object `user1`.
user1.sayHi = function() {
  alert('Hello!');
};

// user1.sayHi();   // Hello!

// A function that is a property of an object is called its method. eg. sayHi();

// 2. a pre-declared function as a method,
let user2 = {
  name: 'Andrew',
  grade: 3
};

// first, declare
function tellHi() {
  console.log('Hello!');
}

// then add as a method
user2.tellHi = tellHi;
// user2.tellHi(); // Hello!

// 3. Method shorthand
let user3 = {
  name: 'Justin',
  level: 1,

  // method regular way
  // sayHi: function(){
  //   console.log("Hola!");
  // }

  // Or method shorthand
  sayHi() {
    console.log('Hola!');
  }

  // method regular way & method shorthand do the same thing
  // As demonstrated, we can omit "function" and just write sayHi().
};

// user3.sayHi();    // Hola!

// ********* “this” in methods **********

// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

let person = {
  name: 'Umesh',
  age: 37,

  sayHi() {
    // `this` is the `current object`.
    console.log('With this: ' + this.name);
    // Or
    console.log('Without this: ' + person.name);
    // `person` instead of `this`. But it is unreliable. If we decide to copy `person` to another variable, e.g. `admin = person` and overwrite `person` with something else, then it will access the wrong object.
  }
};

// person.sayHi();
// With this: Umesh
// Without this: Umesh

let admin = person;
person = null; // overwrite to make things obvious
// admin.sayHi();
// With this: Umesh

// TypeError: Cannot read property 'name' of null at Object.sayHi => if `person.name` is used instead of `this.name`:

//  ********** Object-oriented programming *******

// When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

// OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them?

// That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch, and more.

// ******** “this” is not bound **********

// In JavaScript, keyword `this` behaves unlike most other programming languages.
// It can be used in any function, even if it’s not a method of an object.

let pager = {
  name: 'Pari',
  age: 33
};

let fazer = {
  name: 'Urbashi',
  age: 17
};

function saySomething() {
  return this.name;
}

// // use the same function in two objects
pager.f = saySomething;
fazer.f = saySomething;

// console.log(pager.f()); // Pari   ==> `this` refers to `pager`
// console.log(fazer.f()); // Urbashi  ==> `this` refers to `fazer`

//  *********** Calling without an object: this == undefined **************

function sayNothing() {
  console.log(this);
}

// sayNothing(); // window ==> `global object`

// in strict mode, this is `undefined`.

// Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

// ******* The consequences of unbound this *****

// 1. If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object.

// 2. In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

// 3. The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.


// ********* Arrow functions have no “this” *******

// 1. Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// 2. For instance, here arrow() uses this from the outer user.sayHi() method:

let kaiser = {
  firstName: "Esha",
  sayHi(){
    let arrow = ()=> console.log(this.firstName);

    arrow();
  }
};

kaiser.sayHi();   // Esha

// That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context. 
