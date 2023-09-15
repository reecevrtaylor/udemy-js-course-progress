'use strict';

//////////////////////
// Scope Chain
//////////////////////

/*

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, are ${age}. You were born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Pre ES6 definition - function coped (ignore block)
      var millennial = true;
      const firstName = 'Steve'; // Reece or Steve? -> Steve. JS looks for var in scope first, then looks outwards.
      // const & let vars are block scoped
      const str = `Oh, you are a millennial, ${firstName}`;
      console.log(str);

      // block scoped (strict mode - as it should be)
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }
    console.log(millennial);
    console.log(output); // now = NEW OUTPUT
  }
  printAge();
  return age;
}

const firstName = 'Reece';
calcAge(2001);

*/

//////////////////////
// Hoisting & TDZ
//////////////////////
// Var hoisting
console.log(me);
// console.log(job); // TDZ
// console.log(year); // TDZ

var me = 'Reece';
let job = 'teacher';
const year = 1991;

// Function hoisting
console.log(addDecl(1, 2)); // 3
// console.log(addExpr(1, 2)); // TDZ
// console.log(addArrow(1, 2)); // TDZ -> addArrow not a function if set with var instead of const.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) {
  deleteShoppingCart();
}
var numProducts = 10; // All products deleted -> not 10, its undefined.

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
var y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
