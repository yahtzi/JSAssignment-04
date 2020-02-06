// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

const min = function (n, m) {
  if (n <= m) {
    return n;
  }
  return m;
};
console.log(min(13, 9));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
const calculateCircumference = function (radius) {
  let pi = 3.14;
  return 2 * pi * radius
};
console.log(calculateCircumference(46));

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
const searchString = function (letter, word) {
  let result = 0;
  for (let i = 1; 1 < word.length; 1++) {

};

console.log(searchString("p","mississippi"));