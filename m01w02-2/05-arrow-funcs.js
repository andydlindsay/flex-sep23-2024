// arrow functions added in 2015
// advantages of arrow functions:
// 1. No need for the function keyword!!!!
// 2. If only one argument, you can not use parens
// 3. If only one line of code, no need for curly braces
// 4. If no curly braces, the line of code is automatically returned
// 5. They do not create the variable `this`

const funcOne = function(num) {
  return num + 2;
};

const funcTwo = num => num + 2;
