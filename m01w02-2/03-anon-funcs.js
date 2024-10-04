// naming things is hard!!!!!

let username = 'alice';

console.log(username);
console.log('alice'); // anonymous

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function(anotherFunc) {
  anotherFunc('carol');
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello from anonymous ${name}`);
});

runMyFunc(name => console.log(`hello from anonymous ${name}`));

// anonymous functions
