let x = 1;
let y = 1;

if (true) {
  let x = 5;
  y = 5;
  console.log("---- x is: ", x);
  console.log("---- typeof x is: ", typeof x);
  console.log("\n\n");
  console.log("---- y is: ", y);
  console.log("---- typeof y is: ", typeof y);
  console.log("\n\n");
}

console.log("---- x is: ", x);
console.log("---- typeof x is: ", typeof x);
console.log("\n\n");
console.log("---- y is: ", y);
console.log("---- typeof y is: ", typeof y);
console.log("\n\n");

let num = 8;
function test() {
  function innerTest() {
    console.log("---- num is: ", num);
    console.log("---- typeof num is: ", typeof num);
    console.log("\n\n");
  }

  innerTest();
}
test();

console.log("\n\n");

let index = 999;
for (let index = 0; index < 10; index++) {
  console.log("---- index in for is: ", index);
}
console.log("---- index out of for is: ", index);

console.log("\n\n");