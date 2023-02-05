function radianToDegree(radian) {
  if (typeof radian != "number") {
    return "please input number";
  }

  let PI = 3.14159265359;

  let degree = (radian * (180 / PI)).toFixed(2);

  return degree;
}

const result = radianToDegree(10);
console.log(result);
