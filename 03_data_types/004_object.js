let person = {
    name: 'Khaled Allam',
    age: 34,
    job: 'Engineer',
    address: {
        street: '123 fake st.',
        city: 'Dammam',
        country: 'Saudi Arabia'
    }
};

console.log("---- typeof null is: ", typeof null);
console.log("---- typeof person is: ", typeof person);
console.log("---- person is: ", person);
console.log("---- person['name'] is: ", person['name']);
console.log("---- person.name is: ", person.name);
console.log("---- person.age is: ", person.age);
console.log("---- person.job is: ", person.job);
console.log("---- person.salary is: ", person.salary);

let propertyName = 'name';
console.log("---- person[propertyName] is: ", person[propertyName]);

console.log("---- person['address'] is: ", person['address']);
console.log("---- person.address is: ", person.address);
console.log("---- person['address']['street'] is: ", person['address']['street']);
console.log("---- person.address.street is: ", person.address.street);
console.log("---- person.address?.street is: ", person.address?.street);
console.log("---- person?.address?.street is: ", person?.address?.street);
