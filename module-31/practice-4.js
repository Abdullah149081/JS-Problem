/* Write an arrow function where it will do the following: 
a) It will take two array inputs 
b) Combine the two arrays and assign them in a new array c) Find the maximum number from the new array and return the  result 
 */

const twoArray = (array1, array2) => {
  const margeTwo = [...array1, ...array2];

  const findMax = Math.max(...margeTwo);
  return findMax;
};

const result = twoArray([5, 8, 58, 9], [8, 52, 45]);
console.log(result);
