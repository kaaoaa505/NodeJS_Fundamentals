function myFun() {
  return "just for test fun";
}

console.log("---- myFun is: ", myFun);
console.log("---- myFun() is: ", myFun());
console.log("---- typeof myFun is: ", typeof myFun);
console.log("\n\n");

function sum(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

let greet = function greeting(name) {
  return `Hi, ${name}`;
};

let greetV2 = (name) => {
  return `Hi, ${name} v2`;
};

let doubleOfNumber = (x) => x * 2;

console.log("---- sum(3,4) is: ", sum(3, 4));
console.log("---- mul(3,4) is: ", mul(3, 4));
console.log("---- greet('khaled') is: ", greet("khaled"));
console.log("---- greetV2('khaled') is: ", greetV2("khaled"));
console.log("---- doubleOfNumber(5) is: ", doubleOfNumber(5));
console.log("---- doubleOfNumber(100) is: ", doubleOfNumber(100));
console.log("\n\n");

console.log("---- hoistingFun() is: ", hoistingFun());
function hoistingFun(){
    return `Hoisting mean that we can call the function before we write in the file.`;
}
console.log("\n\n");