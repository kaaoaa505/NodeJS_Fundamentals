function objectsAreEqual(obj001, obj002) {
  if (obj001.length !== obj002.length) {
    return false;
  }

  let isEqual = true;

  for (let index in obj001) {
    const value = obj001[index];

    if (typeof value === "object" && typeof obj002[index] === "object") {
      isEqual = objectsAreEqual(value, obj002[index]);
    } else {
      isEqual = value === obj002[index];
    }

    if (!isEqual) break;
  }

  return isEqual;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

console.log("---- obj1 === obj2 is: ", obj1 === obj2);
console.log("\n\n");

console.log(
  "---- objectsAreEqual(obj1, obj2) is: ",
  objectsAreEqual(obj1, obj2)
);
console.log("\n\n");

const obj3 = { a: 3, b: 3, c: 3 };
const obj4 = { a: 4, b: 4, c: 3 };

console.log(
  "---- objectsAreEqual(obj3, obj4) is: ",
  objectsAreEqual(obj3, obj4)
);
console.log("\n\n");

const obj5 = { a: 1, b: 2, c: 3, d: 4 };
const obj6 = { a: 1, b: 2, c: 3, d: 3, e: 4 };

console.log(
  "---- objectsAreEqual(obj5, obj6) is: ",
  objectsAreEqual(obj5, obj6)
);
console.log("\n\n");

const obj7 = {
  sub1: { a: 1, b: 2 },
  sub2: { a: 3, b: 4 },
};

const obj8 = {
  sub1: { a: 1, b: 2 },
  sub2: { a: 3, b: 4 },
};

console.log(
  "---- objectsAreEqual(obj7, obj8) is: ",
  objectsAreEqual(obj7, obj8)
);
console.log("\n\n");
