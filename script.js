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
    console.log('With person: ' + person.name);
    // `person` instead of `this`. But it is unreliable. If we decide to copy `person` to another variable, e.g. `admin = person` and overwrite `person` with something else, then it will access the wrong object.
  }
};

// person.sayHi();
// With this: Umesh
// With person: Umesh

let admin = person;
person = null; // overwrite to make things obvious
// admin.sayHi();
// With this: Umesh

// TypeError: Cannot read property 'name' of null at Object.sayHi => if `person.name` is used instead of `this.name`:


