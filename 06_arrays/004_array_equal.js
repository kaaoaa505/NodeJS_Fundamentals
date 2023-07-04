function arraysAreEqual(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  let isEqual = true;

  for (let [index, value] of a1.entries()) {
    if (Array.isArray(value) && Array.isArray(a2[index])) {
      isEqual = arraysAreEqual(value, a2[index]);
    } else {
      isEqual = value === a2[index];
    }
    
    if (!isEqual) break;
  }

  return isEqual;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log("---- arr1 === arr2 is: ", arr1 === arr2);
console.log("\n\n");

console.log("---- arraysAreEqual(arr1, arr2) is: ", arraysAreEqual(arr1, arr2));
console.log("\n\n");

const arr3 = [3, 3, 3];
const arr4 = [4, 4, 3];

console.log("---- arraysAreEqual(arr3, arr4) is: ", arraysAreEqual(arr3, arr4));
console.log("\n\n");

const arr5 = [1, 2, 3, 4];
const arr6 = [1, 2, 3, 3, 4];

console.log("---- arraysAreEqual(arr5, arr6) is: ", arraysAreEqual(arr5, arr6));
console.log("\n\n");

const arr7 = [
  [1, 2],
  [3, 4],
];
const arr8 = [
  [1, 2],
  [3, 4],
];

console.log("---- arraysAreEqual(arr7, arr8) is: ", arraysAreEqual(arr7, arr8));
console.log("\n\n");
