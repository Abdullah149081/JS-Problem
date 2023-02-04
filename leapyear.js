function findLeapYear(resultLeap) {
  let findLeap = [];
  for (var i = 0; i < resultLeap.length; i++) {
    let leapYear = resultLeap[i];
    if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0) {
      findLeap.push(leapYear);
    }
  }
  console.log(findLeap);
}

const leapArray = [2016, 2023, 2024, 2025, 2028, 2030, 1700, 1800, 1900, 2000];

const output = findLeapYear(leapArray);
