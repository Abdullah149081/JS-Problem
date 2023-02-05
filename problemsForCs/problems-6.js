function arrayOfObject(object) {
  let smallPerson = object[0];
  for (var i = 0; i < object.length; i++) {
    let objectElement = object[i];

    if (objectElement.age < smallPerson.age) {
      smallPerson = objectElement;
    }
  }

  return smallPerson;
}

const person = [
  { name: "sakib", age: 30 },

  { name: "samiul", age: 20 },

  { name: "sahid", age: 50 },

  { name: "samin", age: 10 },
];

const output = arrayOfObject(person);
console.log(output.name
  );
