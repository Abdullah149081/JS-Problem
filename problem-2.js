let num1 = 14;
let num2 = 12;

if (num1 < num2) {
  console.log("Number Two: is big");
} else if (num1 != num2) {
  console.log("Number one and number Two not Equal");
  if (num2 < num1) {
    console.log("Number Two is lees than Number One / Number Two is Small");

    if (num1 > num2) {
      console.log("Number One is Greater than Number Two / Number One Is Big");
    }
  }
} else if (num1 == num2) {
  console.log("Number one and Number Tow Equal");
}
