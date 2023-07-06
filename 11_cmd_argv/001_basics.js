// node 001_basics.js --name="Khaled Allam" --age=34

console.log("---- process.argv is: ", process.argv);

const args = process.argv.slice(2);

args.forEach(element => {
    if(element.includes('--') && element.includes('=')){
        element = element.replace('--', '');

        const elementArray = element.split('=');

        if(elementArray[0] == 'name'){
            const name = elementArray[1];
            console.log("---- name is: ", name);
        }

        if(elementArray[0] == 'age'){
            const age = elementArray[1];
            console.log("---- age is: ", age);
        }
    }
});