const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function(anotherFunc) {
  // console.log(anotherFunc.toString()); // sayHello.toString()
  anotherFunc('carol'); // console.log('carol');
};

runMyFunc(sayHello);
runMyFunc(console.log);

// callback => a function that is passed to another function to be called by that function
// higher order function (HOF) => a function that accepts another function as an argument
