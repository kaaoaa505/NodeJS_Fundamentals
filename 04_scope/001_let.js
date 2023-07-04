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
