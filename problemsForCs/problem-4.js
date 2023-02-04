function myFriend(friendCheck) {
  let friendBigName = [];

  for (var i = 0; i < friendCheck.length; i++) {
    let index = i;
    let friendElement = friendCheck[index];

    if (friendElement.length > friendBigName.length) {
      friendBigName = friendElement;
    }
  }

  console.log(friendBigName);
}

const friend = ["Meskath", "shamim Hossain"];
const output = myFriend(friend);
