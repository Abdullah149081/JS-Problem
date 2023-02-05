function myFriend(friendCheck) {
  let friendBigName = [];

  for (var i = 0; i < friendCheck.length; i++) {
    let index = i;
    let friendElement = friendCheck[index];

    if (friendElement.length > friendBigName.length) {
      friendBigName = friendElement;
    }
  }

  friendBigName = friendBigName.split("").reverse().join("");

  return friendBigName;
}

const friend = ["Meskath", "shamim Hossain"];
const output = myFriend(friend);
console.log(output);
