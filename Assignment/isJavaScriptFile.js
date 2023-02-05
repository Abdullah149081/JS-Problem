function isJavaScriptFile(fileName) {
  if (typeof fileName != "string" || fileName.length == 0) {
    return "input file extension name";
  }

  if (fileName.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
  // shortCut Method
  //   return fileName.endsWith("js");
}

const resultStr = isJavaScriptFile(".js");
console.log(resultStr);
