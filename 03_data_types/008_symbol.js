let v1 = Symbol("MySymbolV1");
let v2 = Symbol("MySymbolV1");

console.log('---- v1 is: ', v1);
console.log('---- typeof v1 is: ', typeof v1);
console.log('---- v2 is: ', v2);
console.log('---- typeof v2 is: ', typeof v2);
console.log('---- v1 === v2 is: ', v1 === v2);
console.log('\n\n');

let person = {
    name: 'Khaled Allam',
    numberOfSkills: 13,
    [Symbol('numberOfSkills')]: 5,
    [Symbol('numberOfSkills')]: 10,
}
console.log('---- person is: ', person);
console.log('---- typeof person is: ', typeof person);
console.log('\n\n');