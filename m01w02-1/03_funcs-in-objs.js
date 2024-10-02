// method => a function inside an object

// arrow functions DO NOT create `this`

let dog = {
  breed: 'labrador',
  name: 'benji',
  age: 12,
  goForWalk: function() {
    console.log('go for a fun walk!');
  },
  celebrateBirthday: function() {
    console.log(this);
    this.age = 13;
  },
};

const copy = dog;

dog = null;
copy.celebrateBirthday();
console.log(copy);

// console.log(dog);
// // dog.goForWalk();
// dog.celebrateBirthday();
// console.log(dog);
