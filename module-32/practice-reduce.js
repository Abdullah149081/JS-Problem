/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements  of this array and give output. Do this using for loop &  
array.reduce() method.  
 */

const forMethod = [1, 9, 17, 22];

let sum = 0;

for (const forOf of forMethod) {
  sum = forOf + sum;
}

console.log(sum);

const reduceMethod = forMethod.reduce((previousNumber, currentNumber) => {
  return previousNumber + currentNumber;
}, 0);

console.log(reduceMethod);
