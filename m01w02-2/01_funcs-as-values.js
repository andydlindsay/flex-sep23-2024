// function declaration
// function myFunc() {};
// hoisting

// function expression
const myFunc = function() {
  console.log('the function was called');
};

myFunc
myFunc()

const copy = myFunc;
const another = myFunc;
const yetAnother = myFunc;

// yetAnother(); // myFunc()

myFunc.newKey;
myFunc.newKey = 'hello world';
myFunc.newKey = 42;

delete myFunc.newKey;

console.log(myFunc.newKey);
console.log(myFunc['newKey']);

console.log(myFunc);

// first class
