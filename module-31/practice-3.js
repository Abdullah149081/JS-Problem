/* Write an arrow function where it will do the following: 
a) Square each array element 
b) Calculate the sum of the squared elements 
c) Return the average of the sum of the squared elements 
 */

const squaredArrow = (arraySum) => {
  let sum = 0;
  for (const sumA of arraySum) {
    sum = sum + Math.pow(sumA, 2);
  }

  const averageSum = sum / arraySum.length;
  return averageSum;
};

const array = [2, 3, 4, 5];
const result = squaredArrow(array);

console.log(result);
