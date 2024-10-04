// single responsibility principle (SRP)

const animals = ['baboon', 'kitten', 'lizard'];

const loopOverArray = function(arr, callback) {
  for (const element of arr) {
    // console.log('the current element is', element);
    callback(element); // doOnEachLoop(element);
  }
};

const doOnEachLoop = function(animal) {
  console.log(`${animal} is my favourite animal!`);
};

loopOverArray(animals, doOnEachLoop);

loopOverArray([1,2,3], function(num) {
  console.log(`${num} + 2 = ${num + 2}`);
});
