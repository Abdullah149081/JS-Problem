function findOddSum(oddSum) {
  let sum = 0;
  for (var i = 0; i < oddSum.length; i++) {
    let index = i;
    let oddElement = oddSum[index];
    if (oddElement % 2 != 0) {
      sum = sum + oddElement;
    }
  }

  return sum;
}

function findOdd(oddSum) {
  let oddNumber = [];
  for (var i = 0; i < oddSum.length; i++) {
    let index = i;
    let oddElement = oddSum[index];
    if (oddElement % 2 != 0) {
      oddNumber.push(oddElement);
    }
  }

  return oddNumber;
}

const odd = [5, 7, 8, 9, 10, 45, 30];
const output = findOddSum(odd);
const oddNumber = findOdd(odd);
console.log("Your odd Number:", oddNumber, "Your result is:", output);
