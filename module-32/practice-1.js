/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even  numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even  number. */

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [];
for (let even of oddNumbers) {
  evenNumbers.push(even + 1);
}

console.log(evenNumbers);

const mapMethod = oddNumbers.map((evenMap) => evenMap + 1);

console.log(mapMethod);
