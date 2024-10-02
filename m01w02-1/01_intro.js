const studentName = 'alice';
const cohort = 'sep 23 2024';
const hasGraduated = false;

const studentOne = ['alice', 'sep 23 2024', false];

// studentOne[10];
// studentOne[0] = 'bob';

// objects are collections of key/value pairs, hash, hashmap, dictionary, associative arrays

const studentOneObj = { 
  studentName: 'alice', 
  cohort: 'sep 23 2024', 
  hasGraduated: false,
};

// studentOneObj = [];

// arrays are collections of things
// objects describe one particular thing

console.log(studentOneObj);

const myKey = 'cohort';
console.log(studentOneObj[myKey]); // ????
console.log(studentOneObj.myKey);

// studentOneObj['cohort'] = 'oct 21 2024';

// console.log(studentOneObj);

// console['log']('does this work???');

// if you know the name of the key, use dot syntax
// if the name of the key is stored in a variable, use square bracket syntax


// user.address.streetNumber
// user['address']['streetNumber']

// const user = {
//   address: {
//     streetNumber: 1234
//   }
// };

// const person = {
//   name: "Paul",
//   address: {
//     street: '310 W 95th',
//     city: "New York",
//     zipCode : 10027
//   }
// };

// console.log(person);
// console.log(person.address.street);
