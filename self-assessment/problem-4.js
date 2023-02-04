// largest String

function bestFriend(name) {
  let bigName = name[0];
  for (var i = 0; i < name.length; i++) {
    let index = i;
    let nameElement = name[index];

    if (nameElement.length >= bigName.length) {
      bigName = nameElement;
    }
  }
  console.log(bigName);
}

const myFriend = ["asad", "shamim", "mes", "jamshed", "riajul", "mijanur"];

const output = bestFriend(myFriend);

// largest Number

function largestNumber(number) {
  let large = number[0];
  for (var i = 0; i < number.length; i++) {
    let index = i;
    let nameElement = number[index];

    if (nameElement > large) {
      large = nameElement;
    }
  }
  console.log(large);
}

const largest = [45, 20, 45, 102, 50];

const largestOutput = largestNumber(largest);
