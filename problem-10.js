const array = [10, 65, 102, 85, 90, 87];

for (var i = 0; i < array.length; i++) {
  let element = array[i];

  if(element <= 80){
    continue;
  }
  console.log(element)
}
