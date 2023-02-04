function positiveNumber(positive) {
  let positiveNumber = [];
  for (var i = 0; i < positive.length; i++) {
    let index = i;
    let getElement = positive[index];
    if (getElement > 0) {
      positiveNumber.push(getElement);
    } else if (getElement < 0) {
      break;
    }
  }

  console.log(positiveNumber);
}

const number = [5, 6, 1, 4, -2, 7, 8];
const output = positiveNumber(number);
