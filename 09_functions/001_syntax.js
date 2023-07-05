console.log("---- myFun01(1, 2) is: \t\t ", myFun01(1, 2));

function myFun01(a, b) {
  return a + b;
}

const myFun02 = function (a, b) {
  return a + b;
};

const myFun03 = (a, b) => {
  return a + b;
};

const myFun04 = (a, b) => a + b;
console.log("---- myFun02(1, 2) is: \t\t ", myFun02(1, 2));

console.log("---- myFun03(1, 2) is: \t\t ", myFun03(1, 2));

console.log("---- myFun04(1, 2) is: \t\t ", myFun04(1, 2));

let person = (name) => ({name, age: 0});

let p1 = person('Khaled Allam');
p1.age = 34;

let p2 = person('Ahmed Omar');
p2.age = 85;

console.log("---- p1 is: \t\t ", p1);
console.log("---- p2 is: \t\t ", p2);
