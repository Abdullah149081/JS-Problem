function feetToInch(inchConverter) {
  inchConverter = inchConverter * 12;
  return inchConverter
}

const feet = 5.4;
const outputInch = feetToInch(feet);
console.log(outputInch.toFixed(1))
