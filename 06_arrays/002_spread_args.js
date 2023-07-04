function arrayLengthWithSum(...args){
    console.log("---- args is: ", args);
    var sum = 0;

    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        sum += element;
    }

    return {
        length: args.length,
        sum: sum
    };
}

console.log("---- arrayLengthWithSum(1,2) is: ", arrayLengthWithSum(1,2));
console.log('\n\n');

console.log("---- arrayLengthWithSum(1,2,3,4) is: ", arrayLengthWithSum(1,2,3,4));
console.log('\n\n');

console.log("---- arrayLengthWithSum(1,2,3,4,5,6,7,8,9) is: ", arrayLengthWithSum(1,2,3,4,5,6,7,8,9));
console.log('\n\n');