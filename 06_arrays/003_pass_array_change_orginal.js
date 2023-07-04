function printElements(array = []) {
  array.unshift('Start');
  array.push('End');

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    console.log("---- element is: ", element);
  }
}

const arr = [1, 2, 3];

console.log("---- arr is: ", arr);
console.log("\n\n");

printElements(arr);
console.log("\n\n");

console.log("---- arr is: ", arr);
console.log("\n\n");
