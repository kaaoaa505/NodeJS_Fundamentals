const person = {
    name: 'Khaled Allam',
    age: 34,
    job: 'Senior Full Stack Software Engineer',
    identity() {
        console.log(`I'm a person, my name is: ${this.name}`);
    }
};

person.identity();