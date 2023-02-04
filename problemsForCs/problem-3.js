function greaterThenFive(arrayNumber) {
  let storeArray = [];
  for (var i = 0; i < arrayNumber.length; i++) {
    let getElement = arrayNumber[i];
    if (getElement > 5) {
      storeArray.push(getElement);
    }
  }

  return storeArray.length;
}

const array = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const output = greaterThenFive(array);
console.log(output);
