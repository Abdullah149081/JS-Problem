function paperRequirements(copy1, copy2, copy3) {
  const firstPage = 100;
  const secondPage = 200;
  const thirdPage = 300;

  const firstTotal = firstPage * copy1;
  const secondTotal = secondPage * copy2;
  const thirdTotal = thirdPage * copy3;

  const totalPage = firstTotal + secondTotal + thirdTotal;

  return totalPage;
}

const firstBook = 3;
const secondBook = 2;
const thirdBook = 5;

const output = paperRequirements(firstBook, secondBook, thirdBook);
console.log(output);
