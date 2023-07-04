let myStr = "Hello World.";
let result = myStr.split(" ");

console.log("---- myStr is: ", myStr);
console.log("---- typeof myStr is: ", typeof myStr);
console.log("---- result is: ", result);
console.log("\n");

let lettersArray = myStr.split("");
console.log("---- lettersArray is: ", lettersArray);
console.log("\n");

lettersArray.map((value, index) => {
  console.log("---- lettersArray map index is: ", index);
  console.log("---- lettersArray map value is: ", value);

  console.log("\n");
});

console.log("---- lettersArray.join() is: ", lettersArray.join());
console.log("---- lettersArray.join('') is: ", lettersArray.join(''));
console.log("\n");