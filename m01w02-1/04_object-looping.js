//          Arrays Objects
// c-style    Y       N
// for..of    Y       N
// for..in    Y       Y

const arr = ['a', 'b', 'c'];

for (const index in arr) {
  console.log('index', index);
  // console.log('value', arr[index]);
}

console.log();

const house = {
  cleanliness: 2,
  address: '123 Fake Street',
  forSale: false,
};

// loop through the keys of the object using for..in
for (const key in house) {
  console.log('key', key);
  console.log('value', house[key]);
}
