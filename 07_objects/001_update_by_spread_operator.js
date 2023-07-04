let person = {
    name: 'Khaled Allam',
    age: 33,
    job: 'Electrical Engineer'
};

console.log("---- person is: ", person);
console.log("\n\n");

let updates = {
    age: 34,
    job: 'Senior Full Stack Software Engineer'
};

person = {
    ...person,
    ...updates
};

console.log("---- person is: ", person);
console.log("\n\n");