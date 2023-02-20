/* Write an arrow function where it will do the following: 
a) It will take an array where the array elements will be the  name of your friends 
b) Check if the length of each element is even, push elements  with even length to a new array and return the result 
 */

const friendsArray = (friends) => {
  let pushEven = [];

  for (let friend of friends) {
    if (friend.length % 2 === 0) {
      pushEven.push(friend);
    }
  }

  return pushEven;
};

const nameF = ["asad", "shamim", "Riajul", "mas"];

const result = friendsArray(nameF);
console.log(result);
