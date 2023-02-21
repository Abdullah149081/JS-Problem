/* You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now  return/get all the elements which are divisible by 10 using  array.filter() method.
 */

const filterArray = [33, 50, 79, 78, 90, 101, 30];

const dividedArray10 = filterArray.filter((tenDivided) => tenDivided % 10 == 0);

console.log(dividedArray10);
