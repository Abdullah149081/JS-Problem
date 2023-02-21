/* You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now  return/get all the elements which are divisible by 10 using  array.find() method.
 */

const findArray = [33, 50, 79, 78, 90, 101, 30];

const fArray = findArray.find((fiArray) => fiArray % 2 == 0);

console.log(fArray);
