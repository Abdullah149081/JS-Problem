function isBestFriend(objectONe, objectTwo) {
  if (objectONe.name == objectTwo.friend && objectTwo.name == objectONe.friend) {
    return true;
  } else {
    return false;
  }
}

const a = { name: "abul", friend: "babul" };
const b = { name: "masud", friend: "abul" };

const result = isBestFriend(a, b);
console.log(result);

/* ,

{ name: "babul", friend: "abul" }


{ name: "abul", friend: "kabul" },

{ name: "kabul", friend: "sabul" }


{ name: "doe", friend: "alex" },

{ name: "john", friend: "doe" }
 */
