let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = arr1.concat(arr2);

console.log("---- result is: ", result);
console.log('\n\n');

console.log("---- [arr1, arr2] is: ", [arr1, arr2]);
console.log('\n\n');

console.log("---- [...arr1, ...arr2] is: ", [...arr1, ...arr2]);
console.log('\n\n');

let arr1Ref = arr1;
console.log("---- arr1Ref is: ", arr1Ref);
arr1.push(4);
console.log("---- arr1Ref is: ", arr1Ref);
console.log('\n\n');

let arr1Copy = [...arr1];
console.log("---- arr1Copy is: ", arr1Copy);
arr1.push(5);
console.log("---- arr1Copy is: ", arr1Copy);
console.log('\n\n');
