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

/*  Follow above array of objects. So, you have 3 objects as  array element. Can you find out the total sum from here?  
20 + 15 + 22 = 57 . The output will be 57 
What are you thinking? Yeah! Do it with for loop. I know you can do it.  
But! Wait !! Wait !!! Do the same task using array.reduce() method.  
 */

const people = [
  { name: "masud", age: 20 },
  { name: "masud", age: 15 },
  { name: "masud", age: 22 },
];

let sumAge = 0;

for (const peopleAge of people) {
  sumAge = sumAge + peopleAge["age"];
}

console.log(sumAge);

const answer = people.reduce((previousValue, CurrentValue) => previousValue + CurrentValue.age, 0);

console.log(answer);
