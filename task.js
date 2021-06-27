// 1. Using `this` in object literal

// What is the result of accessing its ref? Why?
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}

let user = makeUser();

console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

// That’s because rules that set `this` do not look at object definition. Only the moment of call matters.

// Here the value of `this` inside `makeUser()` is `undefined`, because it is called as a function, not as a method with “dot” syntax.

// The value of `this` is one for the whole function, code blocks and object literals do not affect it.

// So `ref: this` actually takes current `this` of the function.

// Rewriting the function as:
function likeUser() {
  return {
    name: 'Jivan',
    ref() {
      return this;
    }
  };
}

let likeUser1 = likeUser();

console.log(likeUser1.ref().name); // Jivan

// Now it works, because user.ref() is a method. And the value of this is set to the object before (.) dot.
