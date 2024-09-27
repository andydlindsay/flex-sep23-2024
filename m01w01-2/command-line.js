// access the command line arguments in JS


const args = process.argv;
// console.log(args);

// use shift to remove the first two elements of the array

// args.shift();
// args.shift();
// args.splice(0, 2);
// const args = [];

const brandNewArray = args.slice(2);

// const brandNewArray = [ '2', '4', '6' ];
// console.log(brandNewArray);

// c-style loop
// for (let i = 0; i < brandNewArray.length; i++) {
//   const value = brandNewArray[i];
//   console.log(value);
// }

// while
// let i = 0;
// while (i < brandNewArray.length) {
//   const value = brandNewArray[i];
//   console.log(value);
//   i++;
// }

// for..in => loops through the indexes (indices) of the array
// for (const index in brandNewArray) {
//   const value = brandNewArray[index];
//   console.log(value);
// }

// for..of => loops through the values of the array
// for (const value of brandNewArray) {
//   console.log(value);
// }

// const brandNewArray = [ '2', '4', '6', '3.14', '-100' ];

let sum = 0;

for (const value of brandNewArray) {
  // convert the string to a number
  const converted = Number(value); // '3' => 3

  // ask if the number is an integer
  if (Number.isInteger(converted) === true && converted > 0) {
    sum += converted;
  }
}

console.log('sum', sum);
