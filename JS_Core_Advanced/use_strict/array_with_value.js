'use strict';

function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}

const myArray = [1, 2, 3, 4, 5];

console.log(includes(myArray, 3)); // true
console.log(includes(myArray, 6)); // false