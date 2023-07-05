const numberByTimes = (num, times = 1) => {
  let result = num;
  let array = new Array(times).fill();

  for (let _ of array) {
    result *= result;
  }

  return result;
};

console.log("---- numberByTimes(10, 3) is: ", numberByTimes(10, 3));
console.log("---- numberByTimes(10) is: ", numberByTimes(10));
console.log("---- numberByTimes(10, undefined) is: ", numberByTimes(10, undefined));
console.log("---- numberByTimes(10, null) is: ", numberByTimes(10, null));

const greet = ({name = 'N/A'}) => {
    console.log(`Hi, ${name}`);
}

const person = {
    name: 'Khaled Allam',
    age: 34,
    job: 'Senior Full Stack Software Engineer'
};
greet(person);

greet({});
