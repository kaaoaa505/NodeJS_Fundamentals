let empty_array = [];

console.log("---- empty_array is: ", empty_array);
console.log("---- typeof empty_array is: ", typeof empty_array);
console.log('\n\n');

let number_array = [1,2,3,4,5,6,7,8,9];

console.log("---- number_array is: ", number_array);
console.log("---- typeof number_array is: ", typeof number_array);
console.log('\n\n');

let mixed_array = [1,'Two',3,'Four', false, true, {name: 'Khaled Allam'}];
mixed_array.push(12);
mixed_array.push('PushAnyType');

console.log("---- mixed_array is: ", mixed_array);
console.log("---- typeof mixed_array is: ", typeof mixed_array);
console.log("---- mixed_array.pop() is: ", mixed_array.pop());
console.log("---- mixed_array.pop() is: ", mixed_array.pop());
console.log("---- mixed_array.pop() is: ", mixed_array.pop());
console.log("---- mixed_array is: ", mixed_array);
console.log('\n\n');