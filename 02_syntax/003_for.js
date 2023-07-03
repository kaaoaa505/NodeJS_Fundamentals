let array = [
    'khaled',
    'allam',
    'ahmed',
    'omar',
    'abdalla',
    'allam'
];

console.log('----------------------------------------------for:');
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log('----------------------------------------------forEach:');

array.forEach(element => {
    console.log(element);
});

console.log('----------------------------------------------for of:');

for(let element of array){
    console.log(element);
}

console.log('----------------------------------------------for in array:');

for(let index in array){
    const element = array[index];
    console.log(element);
}

console.log('----------------------------------------------for in object:');

const obj = {
    firstName: 'Khaled',
    lastName: 'Allam',
    job: 'Electrical Engineer'
}

for(let key in obj){
    console.log(`\t${key}: \t \t ${obj[key]}`)
}
