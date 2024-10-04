const names = ['alice', 'bob', 'carol'];

const ourForEach = (arr, callback) => {
  // loop through the provided array
  for (let i = 0; i < arr.length; i++) {
    // call the provided callback once for each element
    const element = arr[i];
    callback(element, i, arr);
  }
};

const doOnEachLoop = (name, index, ogArray) => console.log(name, index, ogArray);


names.forEach(doOnEachLoop);
console.log();

ourForEach(names, doOnEachLoop);
