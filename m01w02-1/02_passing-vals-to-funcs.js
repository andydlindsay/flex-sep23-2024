// let myNum = 10;

// const changeMyNum = function(num) {
//   num = 42;
//   console.log('inside the function', num); // 42
// };

// changeMyNum(myNum);

// console.log(myNum); // 10 or 42

// primitives are passed to functions "by value" (copy of the value)

const user = {
  username: 'alice',
};

const changeMyObj = function(obj) {
  obj.username = 'bob';
  console.log('inside the function', obj.username); // 'bob';
};

changeMyObj(user);

console.log(user.username); // 'alice' or 'bob'

// objects are passed to functions "by reference" (which means the original is passed in)
