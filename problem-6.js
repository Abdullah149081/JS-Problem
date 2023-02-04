function outputLowercase(userReturn) {
  var userValue = userReturn;
  userValue = userGiven.toUpperCase();

  return userValue;
}

var userGiven = "masud";
// userGiven = userGiven.toLowerCase();

var outputFuncton = outputLowercase(userGiven);
console.log(outputFuncton);
